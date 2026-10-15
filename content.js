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

  /* --- Предсказания Дениса: text — само предсказание, joke — маленькая подпись --- */
  fortunes: [
    // --- про уроки и Дениса ---
    { text: "If your student forgets his words, he will honestly remember them — and learn them.",
      joke: "Eventually. The orb didn’t say when." },
    { text: "Denis may not hand in his homework on time, but he will always hand it in.",
      joke: "Late, but legendary." },
    { text: "This month you’ll get at least 20 more hearts from me.",
      joke: "Minimum. Counting is optional." },
    { text: "Denis is going to talk with you more often.",
      joke: "See? “Going to” for a future plan. Lesson learned." },
    { text: "Denis will keep using his 24-hour memory — and forgetting everything after that.",
      joke: "Like stories on Instagram: gone in 24 hours." },
    { text: "You will teach your students to speak English easily — and with lots of jokes.",
      joke: "Exhibit A: this card." },

    // --- про Дубай и путешествия ---
    { text: "In 3 years max, you’ll be relaxing on a Dubai beach, sipping a delicious cocktail.",
      joke: "Lessons rescheduled due to sunbathing." },
    { text: "Your future balcony will have a view of the Burj Khalifa.",
      joke: "Morning coffee with the tallest building in the world." },
    { text: "You will visit many countries and meet lots of amazing people.",
      joke: "Your passport will need a passport." },
    { text: "Your bag will be full of designer things — and a little bit of sand.",
      joke: "Sand: the only accessory Dubai gives you for free." },
    { text: "One day you’ll say “it’s cold” at +24°C.",
      joke: "And reach for a jacket. Seriously." },

    // --- пожелания ---
    { text: "Someone wants to video call you — and not just as a student calling his teacher.",
      joke: "The orb is only the messenger. 👀" },
    { text: "You will always be full of energy and beautiful.",
      joke: "The orb checked. No exceptions." },
    { text: "Your bro will never leave you in trouble.",
      joke: "Bro code: signed and sealed." },
    { text: "Stay as cool as Hedgehog from Smeshariki.",
      joke: "Calm, clever and always in style." },
    { text: "May your days end with more than just yogurt and bed.",
      joke: "Upgrade: yogurt, a good series, then bed." },
    { text: "May every weekend start on Monday.",
      joke: "And last until Sunday." },
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
    greeting: "Rita, you’re the boss!",
    // Каждая строка массива — отдельный абзац.
    message: [
      "I really value your time and the way you run our lessons. You’re awesome, fun and very pretty.",
      "When you move to Dubai, feel free to take me with you — or I’ll take you myself. We’ll go shopping (and not only shopping), and while you teach your lessons, camels will be strolling past in the background.",
      "Happy Halloween!",
    ],
    signature: "With love, Denis",
    close: "Close",
  },

  /* --- Подписи к картинкам (alt) --- */
  alt: {
    border: "A row of glowing jack-o’-lanterns",
    witch: "A cute little witch in a big hat",
    ghost: "A friendly ghost holding a pumpkin bucket",
    boo: "Boo!",
    dubai: "The Dubai skyline at sunset",
  },

  footer: "Made with pumpkins and questionable grammar",
};
