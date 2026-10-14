/* Rita's Spooky Fortune — логика. Тексты лежат в content.js. */
(function () {
  "use strict";

  var C = window.CONTENT;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function get(path) {
    return path.split(".").reduce(function (obj, key) { return obj == null ? obj : obj[key]; }, C);
  }

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, reduceMotion.matches ? 0 : ms); });
  }

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---------- Тексты из content.js ---------- */
  function applyTexts() {
    document.title = C.title;
    $$("[data-text]").forEach(function (el) {
      var v = get(el.dataset.text);
      if (typeof v === "string") el.textContent = v;
    });
    $$("[data-label]").forEach(function (el) {
      var v = get(el.dataset.label);
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });
    $$("[data-alt]").forEach(function (el) {
      var v = C.alt && C.alt[el.dataset.alt];
      if (typeof v === "string") el.alt = v;
    });
    var box = $(".finale__message");
    box.textContent = "";
    C.finale.message.forEach(function (line) {
      var p = document.createElement("p");
      p.textContent = line;
      box.appendChild(p);
    });
  }

  /* ---------- Гадание ---------- */
  var section = $(".fortune");
  var orb = $(".orb");
  var card = $(".card");
  var cardText = $(".card__text");
  var cardJoke = $(".card__joke");
  var askBtn = $(".ask-again");
  var status = $(".status");
  var smoke = $(".smoke");
  var bag = [];
  var busy = false;

  function nextFortune() {
    var note = "";
    if (bag.length === 0) {
      if (cardText.textContent) note = C.allSeenNote; // колода закончилась — перемешиваем
      bag = shuffle(C.fortunes);
    }
    return { fortune: bag.pop(), note: note };
  }

  function puffSmoke() {
    if (reduceMotion.matches) return;
    smoke.textContent = "";
    for (var i = 0; i < 9; i++) {
      var s = document.createElement("i");
      var angle = (i / 9) * Math.PI * 2;
      s.style.setProperty("--dx", Math.round(Math.cos(angle) * 70) + "px");
      s.style.setProperty("--dy", Math.round(-60 - Math.random() * 80) + "px");
      s.style.animationDelay = (i * 60) + "ms";
      smoke.appendChild(s);
    }
  }

  async function readFortune() {
    if (busy) return;
    busy = true;
    orb.disabled = true;
    askBtn.disabled = true;

    if (card.classList.contains("is-flipped")) {
      card.classList.remove("is-flipped");   // переворачиваем рубашкой вверх
      await wait(500);
    }

    var next = nextFortune();
    section.classList.add("is-reading");
    status.textContent = next.note || C.readingText;
    puffSmoke();
    await wait(1600);

    cardText.textContent = next.fortune.text;
    cardJoke.textContent = next.fortune.joke || "";
    section.classList.remove("is-reading");
    status.textContent = "";

    if (card.hidden) {
      card.hidden = false;
      void card.offsetWidth;                  // дать браузеру отрисовать рубашку перед переворотом
      await wait(250);
    }
    card.classList.add("is-flipped");
    askBtn.hidden = false;

    await wait(800);
    busy = false;
    orb.disabled = false;
    askBtn.disabled = false;
  }

  orb.addEventListener("click", readFortune);
  askBtn.addEventListener("click", readFortune);
  $(".card__front").setAttribute("aria-live", "polite");

  /* ---------- Trick or Treat ---------- */
  var doorsBox = $(".doors");
  var tpl = $("#door-tpl");
  var reaction = $(".reaction");
  var playAgain = $(".play-again");
  var doors = [];
  var round = [];

  function prizeNode(prize) {
    if (prize.type === "ghost") {
      var img = document.createElement("img");
      img.src = "assets/ghost.png";
      img.alt = C.alt.ghost;
      img.loading = "lazy";
      img.decoding = "async";
      return img;
    }
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    var use = document.createElementNS(ns, "use");
    svg.setAttribute("viewBox", prize.type === "treat" ? "0 0 200 120" : "0 0 200 180");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", prize.title);
    use.setAttribute("href", prize.type === "treat" ? "#candy" : "#grumpy");
    svg.appendChild(use);
    return svg;
  }

  function dealRound() {
    round = shuffle(C.game.prizes);
    doors.forEach(function (door, i) {
      var slot = $(".door__prize", door);
      slot.textContent = "";
      slot.appendChild(prizeNode(round[i]));
      door.classList.remove("is-open", "is-chosen", "is-other");
      door.disabled = false;
    });
    reaction.textContent = "";
    playAgain.hidden = true;
  }

  async function pickDoor(index) {
    doors.forEach(function (d) { d.disabled = true; });
    var chosen = doors[index];
    chosen.classList.add("is-chosen", "is-open");

    var prize = round[index];
    reaction.textContent = "";
    var strong = document.createElement("strong");
    strong.textContent = prize.title;
    reaction.appendChild(strong);
    reaction.appendChild(document.createTextNode(prize.text));

    await wait(1100);
    doors.forEach(function (d, i) {
      if (i !== index) d.classList.add("is-other", "is-open");
    });
    playAgain.hidden = false;
  }

  for (var i = 0; i < 3; i++) {
    var door = tpl.content.firstElementChild.cloneNode(true);
    $(".door__num", door).textContent = String(i + 1);
    door.setAttribute("aria-label", C.game.doorLabel + " " + (i + 1));
    door.addEventListener("click", pickDoor.bind(null, i));
    doorsBox.appendChild(door);
    doors.push(door);
  }

  playAgain.addEventListener("click", async function () {
    playAgain.hidden = true;
    doors.forEach(function (d) { d.classList.remove("is-open"); });
    await wait(700);                          // двери закрылись — теперь можно менять призы
    dealRound();
    doors[0].focus();
  });

  /* ---------- One more thing ---------- */
  var dialog = $(".finale");
  var openBtn = $(".finale-btn");

  openBtn.addEventListener("click", function () {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  });
  $(".finale__close").addEventListener("click", function () {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    openBtn.focus();
  });
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();  // клик по затемнению вокруг карточки
  });

  applyTexts();
  dealRound();
})();
