// ==============================
// Quote Banks
// ==============================
const pointlessQuotes = [
  "After creating the sun, the earth was still too hot, so God created snakes in order to make the earthworm.",
  "If cows could vote, McDonald’s would be outlawed tomorrow.",
  "Your shadow is proof you’re never truly alone. Creepy, right?",
  "Bananas are just boomerangs that lost their way home.",
  "The moon is basically the Earth’s selfie ring light.",
  "Don’t trust stairs. They’re always up to something.",
  "If you drop a soap on the floor, is the floor clean or is the soap dirty?",
  "Pineapples are just spiky apples trying too hard.",
  "Every time you clean your room, somewhere, dust is plotting a comeback tour.",
  "Oceans are just giant bowls of soup we forgot to season.",
  "Hotdogs are just sandwiches that gave up on structural integrity.",
  "When life gives you lemons, squeeze them into someone’s Wi-Fi router and claim dominance."
];

const judgyQuotes = [
  "You’ve opened this site three times today. Maybe try opening a book?",
  "Your phone battery lasts longer than your last situationship.",
  "You say you’re tired, but you’ve done nothing but scroll for 3 hours.",
  "Confidence is key, but in your case, maybe just try the spare key.",
  "Life is short. Not as short as your attention span, but close.",
  "You laugh at these quotes, but your laundry is still waiting.",
  "Stop blaming Mercury retrograde. It’s just you being unserious.",
  "Even Google doesn’t have all the answers. What makes you think you do?",
  "Your ‘five-year plan’ is just vibes and Wi-Fi at this point.",
  "Hard work pays off. Unless you’re you, then it just pays in disappointment.",
  "Your procrastination skills deserve a LinkedIn endorsement.",
  "You don’t need motivation. You need sleep and a functioning calendar app.",
  "Remember: even your excuses are getting bored of you.",
  "Your vibe says ‘main character,’ your haircut says ‘extra.’",
  "You laugh at this, but your laundry still isn’t done."
];

const arsenalQuotes = [
  "Arsenal’s trophy drought is old enough to drink at this point. 🤣🤣",
  "Every season Arsenal fans say ‘this year is different’ — yes, the Elephant is always down by February instead. 🥱🤣",
  "Top of the table in December, memes by Feb. 🤡",
  "Arsenal only win with konas, kona, kona, kona, konaaa.. 🎶.",
  "Arsenal bottling is now officially UNESCO heritage, can't be football 'heritage.. ##2nd placemans! 🥱🥱",
  "Arteta’s tactics are basically IKEA furniture: looks nice, collapses under pressure. 🤣🤣",
  "Being an Arsenal fan is cardio — the heart attacks are free. 🏃‍➡️ (phase 7)",
  "Arsenal have the most days top of the table with a participation medal. Rent-free champions. 🤣🤣 how does it feel to be just good enough? 🤣🤣",
  "Every Arsenal documentary is just therapy for fans who survived 'last season'. 🥱🤣",
  "Konas FC: powered by vibes and TikTok edits (#Baba Ne Jealous), Maybe Jealous of Yanited!!!. 🤣🤣 Cry More",
];

const chelseaQuotes = [
  "Chelsea’s squad depth is so deep, even Titanic hasn’t reached it. 🤣🤣",
  "Todd Boehly’s strategy is just FIFA Career Mode with unlimited coins. ",
  "Chelsea transfers are like TikTok trends: viral for 2 weeks, irrelevant by January. #Garna who?? ganna be on the bench. 🤣🤣",
  "As a Man U fan: I can't banter Liverpool, won the Prem, can't banter Chelsea, won the conference and World Cup 😭, can't banter Tottenham, won Europa 😭,can't banter city (I'd be killing the egos of the last 2 fans left), BUT ARSENAL, ME & U THIS SEASON 🤝🤝"
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
    
const allBanterQuotes = pointlessQuotes.concat(arsenalQuotes, chelseaQuotes);

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
  quoteElement.textContent = newQuote;
  quoteElement.classList.add('fade-in');
}

// Main click listener
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

// Mode buttons
function setMode(mode) {
  currentMode = mode;
  document.querySelectorAll(".mode-button").forEach(btn => btn.classList.remove("active-mode"));
  if (mode === "normal") document.getElementById("normal-btn").classList.add("active-mode");
  if (mode === "judgy") document.getElementById("judgy-btn").classList.add("active-mode");
  if (mode === "banter") document.getElementById("banter-btn").classList.add("active-mode");
  if (mode === "chaos") {
    document.getElementById("chaos-btn").classList.add("active-mode");
    bodyElement.classList.add("chaos-mode");
    quoteContainer.classList.add("chaos-shake");
  } else {
    bodyElement.classList.remove("chaos-mode");
    quoteContainer.classList.remove("chaos-shake");
  }
  updateQuote();
}

document.getElementById("normal-btn").addEventListener("click", () => setMode("normal"));
document.getElementById("judgy-btn").addEventListener("click", () => setMode("judgy"));
document.getElementById("banter-btn").addEventListener("click", () => setMode("banter"));
document.getElementById("chaos-btn").addEventListener("click", () => setMode("chaos"));
