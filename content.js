/* =====================================================================
   Rita's Spooky Fortune — ВСЕ ТЕКСТЫ ЗДЕСЬ
   ---------------------------------------------------------------------
   Правь смело: сайт читает только этот объект.
   - Апостроф внутри текста: используй ’ (типографский) — так не сломаются кавычки.
   - Порядок предсказаний не важен — они перемешиваются и не повторяются,
     пока не закончатся все.
   - Добавлять/удалять предсказания можно в любом количестве.
   ===================================================================== */

window.CONTENT = {
  /* --- Имя: меняется здесь, в title и в finale.greeting --- */
  name: "Rita",

  /* --- Шапка --- */
  title: "Rita’s Spooky Fortune",
  subtitle: "Tap the orb",
  intro: "The orb knows things. Mostly about grammar and Dubai.",

  /* --- Хрустальный шар --- */
  orbLabel: "Crystal ball. Tap to get your fortune",
  readingText: "The spirits are checking your homework…",
  askAgain: "Ask again",
  cardTitle: "Your fortune",
  allSeenNote: "That’s all of them! The orb reshuffles the future…",

  /* --- 20 предсказаний: text — само предсказание, joke — маленькая подпись --- */
  fortunes: [
    // --- про английский ---
    { text: "You will finally stop confusing Present Perfect and Past Simple. Probability: 12%.",
      joke: "The other 88% have already happened. Or did they happen?" },
    { text: "A student will hand in homework on time. Not this week, but it is written in the stars.",
      joke: "The stars are very, very far away." },
    { text: "You will hear “I am agree” at least three more times this month.",
      joke: "Breathe in. Smile. Correct gently." },
    { text: "An irregular verb will haunt your dreams. It’s “to lie”. Or “to lay”. Nobody knows.",
      joke: "Even the ghosts had to google it." },
    { text: "Someone will say “Can I ask a question?” and then not ask a question.",
      joke: "A Halloween classic." },
    { text: "Your red pen will run out at the most dramatic moment of checking a test.",
      joke: "Buy two. Trust the orb." },
    { text: "A student will pronounce “comfortable” with four full syllables and feel proud.",
      joke: "Com-for-ta-ble. Truly terrifying." },

    // --- про Дубай ---
    { text: "A desert city is calling. Within 3 years you’ll be complaining about 45°C like a local.",
      joke: "“Only 41 today? I’ll take a jacket.”" },
    { text: "You will teach English to a falcon. It will learn faster than some people.",
      joke: "No names. The orb is polite." },
    { text: "Your future balcony has a view of the Burj Khalifa — and of a neighbour admiring the same view.",
      joke: "Luxury is a shared experience." },
    { text: "You will go to a Dubai brunch, and it will last longer than this lesson.",
      joke: "Brunch there is an Olympic sport." },
    { text: "Sand will appear in your bag. You will never find out how.",
      joke: "Not a bug. A desert feature." },
    { text: "One day you’ll say “it’s cold” at +24°C and mean it.",
      joke: "The transformation will be complete." },

    // --- бытовые ---
    { text: "Someone will send you a voice message longer than this lesson.",
      joke: "4:37. Starts with “so, basically…”" },
    { text: "Your phone will hit 1% exactly when the good part begins.",
      joke: "The orb hates this too." },
    { text: "A cat will ignore you this week. It’s not personal. It’s a cat.",
      joke: "On Halloween, cats are in charge." },
    { text: "You will open the fridge three times, hoping new food has appeared.",
      joke: "Spoiler: it’s still yogurt." },
    { text: "You will find the perfect playlist — and then never find it again.",
      joke: "The algorithm knows. The algorithm won’t tell." },
    { text: "A huge amount of candy is coming your way. Most of it you’ll pretend you didn’t eat.",
      joke: "The wrappers are the only witnesses." },
    { text: "Your coffee will be exactly the right temperature. For about four seconds.",
      joke: "Enjoy them. That’s the whole fortune." },
  ],

  /* --- Мини-игра «Trick or Treat» --- */
  game: {
    title: "Trick or Treat",
    hint: "Three doors. One hides candy. Choose wisely.",
    doorLabel: "Open door",       // кнопки озвучиваются как «Open door 1», «Open door 2»…
    playAgain: "Play again",
    // Что может оказаться за дверью. Ровно один приз с type "treat".
    // type задаёт картинку: treat = конфета, ghost = призрак, pumpkin = тыква-ворчун.
    prizes: [
      { type: "treat",
        title: "TREAT!",
        text: "Real candy. No grammar test attached. Probably." },
      { type: "ghost",
        title: "Boo!",
        text: "Just a ghost. He says your homework is “not that hard”. He has never done homework." },
      { type: "pumpkin",
        title: "Trick!",
        text: "A grumpy pumpkin. He wanted to be a pie. Don’t ask." },
    ],
  },

  /* --- Финал: кнопка в углу и карточка --- */
  finale: {
    button: "One more thing",
    greeting: "Dear Rita,",
    // ЗАГОТОВКА — перепиши своими словами. Каждая строка массива — отдельный абзац.
    message: [
      "Thank you for all the lessons, the patience, and for not running away the day I said “I am agree”.",
      "Happy Halloween!",
      "A warning from the orb: when you move to Dubai, the lessons don’t stop. You’ll just have to teach from the desert — with a camel photobombing every call.",
    ],
    signature: "— your student",
    close: "Close",
  },

  /* --- Подписи к картинкам (alt) --- */
  alt: {
    border: "A row of glowing jack-o’-lanterns",
    witch: "A cute little witch in a big hat",
    ghost: "A friendly ghost holding a pumpkin bucket",
    boo: "Boo!",
    dubai: "The Dubai skyline at sunset with a tiny pumpkin on a sand dune",
  },

  footer: "Made with pumpkins and questionable grammar",
};
