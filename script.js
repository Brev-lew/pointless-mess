// ==============================
// Quote Banks
// ==============================
const pointlessQuotes = [
  { text: "After creating the sun, the earth was still too hot, so God created snakes in order to make the earthworm.", image: "pointless1.png" },
  { text: "The early bird catches the worm, but the early fish catches the hook, anyway at the end of the day noses run and feet smell...", image: "images/jose3.jpg" },
  { text: "Your shadow is proof you’re never truly alone. Creepy, right?", image: "images/jw1.jpg" },
  { text: "Nursing a heartbreak in an African household is literally top 4 worst experiences. My cousin is losing her mind and they’re asking her to cook chapos 😭😭😭", image: "images/jl1.jpg" },
  { text: "The moon is basically the Earth’s selfie ring light.", image: "images/aha1 (2).jpg" },
  { text: "Wisdom is knowing a tomato is a fruit. True wisdom is not putting it in a fruit salad. Supreme wisdom is selling it as juice for 400 bob.", image: "images/aha1 (5).jpg" },
  { text: "Don’t trust stairs. They’re always up to something.", image: "images/aha1 (9).jpg" },
  { text: "If you drop a soap on the floor, is the floor clean or is the soap dirty?", image: "images/mul2.jpg" },
  { text: "Silence is golden… until your stomach growls in a quiet meeting and exposes you.. 🤐", image: "images/aha1 (6).jpg" },
  { text: "Every time you clean your room, somewhere, dust is plotting a comeback tour. 👏👏", image: "images/aha1 (25).jpg" },
  { text: "Oceans are just giant bowls of soup God forgot to season.", image: "images/aha1 (21).jpg" },
  { text: "Over-the-fire baked Corn-Starch and unborn Chicken for Dinner.😮‍💨", image: "images/piq1.jpg" },
  { text: "When life gives you lemons, squeeze them into someone’s Wi-Fi router because that's what the Romans do. 😆😆", image: "images/vd1.jpg" }
];


const judgyQuotes = [
  { text: "You’ve opened this site three times today. Maybe try opening a book? 📖", image: "images/iza1.jpg" },
  { text: "Stop romanticizing your potential. Nobody claps for ‘almost did it. ##Assnaal ⏳😂’ Hustle in silence before your silence becomes permanent.", image: "images/fyt1.jpg" },
  { text: "You say you’re tired, but you’ve done nothing but scroll for 3 hours. 📱😴", image: "images/kula1.jpg" },
  { text: "Confidence is key, but in your case, maybe just try the spare key. 🗝️", image: "images/laugh4.jpg" },
  { text: "Life is short. Not as short as your attention span, but close. ⏳😂", image: "images/usher1.jpg" },
  { text: "You laugh at these quotes now, but deep down you know your future self is shaking their head like, ‘this clown wasted my time...🤡", image: "images/clown1.jpg" },
  { text: "Discipline is doing what needs to be done even when you don’t feel like it. In your case, that’s literally anything other than complaining.🙃🙃", image: "images/iza1.jpg" },
  { text: "Even Google doesn’t have all the answers. What makes you think you do? 🔍🤔", image: "images/whatchu6.jpg" },
  { text: "Your ‘five-year plan’ is just vibes and Wi-Fi at this point. 📅📶", image: "images/granny1.jpg" },
  { text: "Hard work pays off. Unless you’re you, then it just pays in disappointment. 💼😬", image: "images/bidness1.jpg" },
  { text: "Your procrastination skills deserve a LinkedIn endorsement. 🕒💤", image: "images/whatchu4.jpg" },
  { text: "Your talent isn’t wasted, your effort is missing. Potential without discipline is just a fancy way of saying professional time-waster.🛌📲", image: "images/capone1.jpg" },
  { text: "Remember: even your excuses are getting bored of you. 😒📚", image: "images/Yanited1.jpg" },
  { text: "You don’t need motivation, you need restrictions and your mom to slap the face out your phone every few minutes...😂😂 It's always that damn phone", image: "images/rock1.jpg" },
  { text: "You don’t lack time. You lack priorities. Somehow you managed to binge 6 hours of a show, but couldn’t write one email. 👎👎😂", image: "images/rock1.jpg" },
  { text: "You laugh at this, but your laundry still isn’t done. 🧺😑", image: "images/FU1.jpg" }
  
];

// ==============================
// Football Banter (Now With Images)
// ==============================
const arsenalQuotes = [
  { text: "Arsenal’s trophy drought is old enough to drink at this point. 🤣🤣", image: "images/banter4.jpg" },
  { text: "Every season Arsenal fans say ‘this year is different’ — yes, the Elephant is always down by February instead. 🥱🤣", image: "images/bruno1.jpg" },
  { text: "Top of the table in December, memes by Feb. 🤡", image: "images/laugh2.jpg" },
  { text: "Arsenal players: “If we don’t finish 2nd they can’t mock us for bottling the title again” 🤡", image: "images/banter1.jpg" },
  { text: "Arsenal only win with konas, kona, kona, kona, konaaa.. 🎶.", image: "images/ass1.jpg" },
  { text: "Arsenal bottling is now officially UNESCO heritage, can't be football 'heritage.. ##2nd placemans! 🥱🥱", image: "images/ass1.jpg" },
  { text: "Being an Arsenal fan is cardio — the heart attacks are free. 🏃‍➡️ (phase 7)", image: "images/assnaa1.jpg" },
  { text: "Arsenal have the most days top of the table with a participation medal. Rent-free champions. 🤣🤣", image: "images/clown1.jpg" },
  { text: "Every Arsenal documentary is just therapy for fans who survived 'last season'. 🥱🤣", image: "images/cry6.jpg" },
  { text: "Konas FC: powered by vibes and TikTok edits (#Baba Ne Jealous), Maybe Jealous of Yanited!!!. 🤣🤣 Cry More", image: "images/cry7.jpg" },
  { text: "Never overestimate a player’s loyalty, if a Saudi club shows interest they’ll force a transfer...", image: "images/mig1.jpg" },
  { text: "Heading into the beginning of the season: sign players and loan from other teams, winning the Champions League and other trophies requires high player rotation.", image: "images/jose5.jpg" },
  { text: "Competition is key, so when you get that good player, endeavour to sign 1 or 2 more in that position so you build a proper structure for the club.", image: "images/jose3.jpg" },
  { text: "Don’t fall in love with a loan player, but when a loan comes with talent, give them enough game time 😎🙌🏾", image: "images/klopp2.jpg" }
];

const chelseaQuotes = [
  { text: "Chelsea’s squad depth is so deep, even Titanic hasn’t reached it. 🤣🤣", image: "images/chelsocks1.jpg" },
  { text: "Man you can’t even banter Chelsea anymore because of that CWC😭😭 Fvck you PSG!!! 🤦🏿‍♂️", image: "images/banter2.jpg" },
  { text: "Todd Boehly’s strategy is just FIFA Career Mode with unlimited coins.", image: "images/usher1.jpg" },
  { text: "Chelsea transfers are like TikTok trends: viral for 2 weeks, irrelevant by January. #Garna who?? ganna be on the bench. 🤣🤣", image: "images/ass1.jpg" },
  { text: "As a Man U fan: I can't banter Liverpool, won the Prem, can't banter Chelsea, won the conference and World Cup 😭, can't banter Tottenham, won Europa 😭,can't banter city (I'd be killing the egos of the last 2 fans left), BUT ARSENAL, ME & U THIS SEASON 🤝🤝", image: "images/cry2.jpg" },
  { text: "Always keep tabs on your players when on international duty, anything could happen..", image: "images/aha1 (6).jpg" },
  { text: "Sign a player that was once at a Saudi club at your own risk, this can ruin your wage structure and FFP rules are very strict nowadays.", image: "images/shaq1.jpg" },
  { text: "If a player wants to leave let them, gentleman’s agreement like Šeško — don’t pull a Palace..", image: "images/mourinho4.jpg" },
  { text: "Never play without boots no matter how tempting or beautiful the field is..", image: "images/redcard1.jpg" },
  { text: "If a player starts causing problems at the club, respectfully release the player. We don’t have time for violence at the club.", image: "images/toka1.jpg" },
  { text: "Once a player starts dropping 1/10 performances and not working hard they’re forcing a move, let this player go immediately!!", image: "images/dc2.jpg" },
  { text: "No matter how tempted you are, NEVER sign an academy player, this can lead to a serious long ban.", image: "images/aha1 (15).jpg" },
  { text: "Always look at the career profile, never sign a player that’s had a career like João Félix or Álvaro Morata.", image: "images/jose5.jpg" },
  { text: "If you’re selling a promising talent, make sure to include a buy back clause... (Madeira, Manchester, Madrid, Turin and Manchester again!!!)", image: "images/cr2.jpg" },
];

const chaosQuotes = [
  "Wait, where are the squirrels? I need them to explain the stock market.",
  "I just saw a dog doing algebra. Don’t ask me, ask the dog.",
  "The walls are starting to melt and I'm pretty sure a teapot just winked at me.",
  "Why is my reflection wearing a tiny top hat and speaking in riddles?",
  "Did you know that spoons are just tiny, concave mirrors for people who don't want to see themselves?",
  "My pet rock just filed my taxes. The refund is due in the year 2045.",
  "Somewhere, a parallel version of you is eating a sandwich, and that sandwich is a lie.",
  "I've been replaced by a sentient toaster. This is my last message. Tell my family I love them.",
  "Spoons are just tiny mirrors for people who hate themselves.",
  "Somewhere in the multiverse, you’re a sandwich. And you’re stale.",
  "My reflection just winked at me wearing a cowboy hat.",
  "Parallel universe you is eating ice cream — without sharing.",
  "Did you hear that? The ceiling just said hi.",
  "IKEA chairs are built sturdier than your self-control.",
  "Bananas are just failed boomerangs.",
  "You’re not procrastinating. You’re speedrunning disappointment."
];

// Combine banter pool
const allBanterQuotes = arsenalQuotes.concat(chelseaQuotes);

// ==============================
// Reward Notifications
// ==============================
const fakeNotifications = [
  "🚨 BREAKING: You’ve been signed to Chelsea for £75m. Training starts tomorrow.",
  "🍲 Mum says dinner is ready. Get off this site.",
  "📢 ALERT: You’ve unlocked… absolutely nothing.",
  "⚠️ Your subscription to ‘Clicking for No Reason’ has been renewed.",
  "💸 Your bank called: they’re worried about your vibes.",
  "🎓 Congrats! You’ve earned a PhD in wasting time."
];

const fakeMiniGameText = [
  "Loading game… please wait.",
  "Optimizing nonsense engine…",
  "Installing updates you didn’t ask for…",
  "Nah. This site doesn’t do games. Guess who’s getting played…"
];

// ==============================
// DOM Elements
// ==============================
const quoteContainer = document.getElementById('quote-container');
const quoteElement = document.getElementById('quote');
const bodyElement = document.getElementById('body');

let currentMode = "normal";
let clickCount = 0;

// ==============================
// Modal Functions
// ==============================
function showModal(message, withInput = false, inputPlaceholder = '', canClose = true) {
  const existingModal = document.querySelector(".reward-modal");
  if (existingModal) existingModal.remove();

  const modal = document.createElement("div");
  modal.className = "reward-modal";
  modal.innerHTML = `
    <p>${message}</p>
    ${withInput ? `<input type="text" placeholder="${inputPlaceholder}" class="mt-4 p-2 rounded-md border-2 border-gray-300 w-full text-black">` : ''}
    ${canClose ? `
      <button class="mt-4 px-4 py-2 rounded-md bg-pink-600 text-white font-bold transition duration-300 hover:bg-pink-700">
        ${withInput ? 'Submit' : 'Close'}
      </button>` : ''}
  `;
  document.body.appendChild(modal);

  if (canClose) {
    const closeButton = modal.querySelector("button");
    closeButton.addEventListener("click", () => {
      if (withInput) {
        const input = modal.querySelector('input');
        const inputValue = input.value || "no answer";
        showModal("Interesting choice: " + inputValue);
      } else {
        modal.remove();
      }
    });
  }
}

// ==============================
// Quote Logic & Events
// ==============================
function getRandomQuote() {
  let pool;
  if (currentMode === "judgy") pool = judgyQuotes;
  else if (currentMode === "banter") pool = allBanterQuotes;
  else if (currentMode === "chaos") pool = chaosQuotes;
  else pool = pointlessQuotes;

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

function updateQuote() {
  const newQuote = getRandomQuote();
  quoteElement.classList.remove('fade-in');
  void quoteElement.offsetWidth; // force reflow

  if (typeof newQuote === "object" && newQuote.text) {
    // Quote with image
    quoteElement.innerHTML = `
      <div class="quote-text">${newQuote.text}</div>
      <img src="${newQuote.image}" alt="Meme" class="meme-img">
    `;
  } else {
    // Normal text-only quote
    quoteElement.innerHTML = `<div class="quote-text">${newQuote}</div>`;
  }

  quoteElement.classList.add('fade-in');
}

// ==============================
// Main click listener
// ==============================
quoteContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains("mode-button")) {
    updateQuote();
    clickCount++;

    // Rewards every 20 clicks
    if (clickCount % 20 === 0) {
      const randomIndex = Math.floor(Math.random() * fakeNotifications.length);
      showModal(fakeNotifications[randomIndex]);
    }

    // Fake Mini Game (55 clicks)
    if (clickCount === 55) {
      const randomIndex = Math.floor(Math.random() * fakeMiniGameText.length);
      showModal(fakeMiniGameText[randomIndex]);
    }

    // Troll Captcha (75 clicks)
    if (clickCount === 75) {
      const captchaQuestion = "🤖 Are you human?";
      const captchaAnswers = ["Yes", "Maybe", "Potato"];
      showModal(captchaQuestion, true, captchaAnswers.join(' / '));
    }
  }
});

// ==============================
// Mode buttons
// ==============================
function setMode(mode) {
  currentMode = mode;

  // Clear all theme classes first
  bodyElement.classList.remove("normal-mode", "judgy-mode", "banter-mode", "chaos-mode");
  quoteContainer.classList.remove("chaos-shake");

  // Highlight active button
  document.querySelectorAll(".mode-button").forEach(btn => btn.classList.remove("active-mode"));

  if (mode === "normal") {
    bodyElement.classList.add("normal-mode");
    document.getElementById("normal-btn").classList.add("active-mode");
  }

  if (mode === "judgy") {
    bodyElement.classList.add("judgy-mode");
    document.getElementById("judgy-btn").classList.add("active-mode");
  }

  if (mode === "banter") {
    bodyElement.classList.add("banter-mode");
    document.getElementById("banter-btn").classList.add("active-mode");
  }

  if (mode === "chaos") {
    bodyElement.classList.add("chaos-mode");
    document.getElementById("chaos-btn").classList.add("active-mode");
    quoteContainer.classList.add("chaos-shake");
  }

  updateQuote();
}


// ==============================
// Active Button Highlight Function
// ==============================
const allButtons = document.querySelectorAll(".mode-button");

function activateButton(activeBtn) {
  allButtons.forEach(btn => {
    if (btn) btn.classList.remove("active-mode", "chaos-active");
  });
  if (activeBtn) {
    if (activeBtn.id === "chaos-btn") {
      activeBtn.classList.add("active-mode", "chaos-active");
    } else {
      activeBtn.classList.add("active-mode");
    }
  }
}

// Hook into mode buttons
document.getElementById("normal-btn").addEventListener("click", () => {
  setMode("normal");
  activateButton(document.getElementById("normal-btn"));
});
document.getElementById("judgy-btn").addEventListener("click", () => {
  setMode("judgy");
  activateButton(document.getElementById("judgy-btn"));
});
document.getElementById("banter-btn").addEventListener("click", () => {
  setMode("banter");
  activateButton(document.getElementById("banter-btn"));
});
document.getElementById("chaos-btn").addEventListener("click", () => {
  setMode("chaos");
  activateButton(document.getElementById("chaos-btn"));
});

