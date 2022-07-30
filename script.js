// variables
let quotes = [
  "Remember, today is the tomorrow you worried about yesterday.",
  "If you are born poor, it's not your mistake, but if you die poor it's your mistake.",
  "You should learn how to code it's better for you and for your brain.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "Do what you can, with what you have, where you are.",
  "If you cannot do great things, do small things in a great way.",
  "If opportunity doesn’t knock, build a door.",
  "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
  "I haven’t failed. I’ve just found 10,000 ways that won’t work.",
  "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  "Either you run the day, or the day runs you.",
  "The best way to predict the future is to invent it.",
  "Everything has beauty, but not everyone can see.",
  "Too many of us are not living our dreams because we are living our fears.",
  "A person who never made a mistake never tried anything new.",
  "The person who says it cannot be done should not interrupt the person who is doing it.",
  "If you tell the truth, you don’t have to remember anything.",
  "The road to success and the road to failure are almost exactly the same.",
  "Walking with a friend in the dark is better than walking alone in the light.",
  "The only true wisdom is knowing that you know nothing.",
  "Never leave that till tomorrow which you can do today.",
  "The man who removes a mountain begins by carrying away small stones.",
  "The only way I can get you to do anything is by giving you what you want.",
  "Every successful person loves the game. The chance to prove his worth, to excel, to win.",
  "One reason why birds and horses are not unhappy is because they are not trying to impress other birds and horses.",
  "All men have fears, but the brave put down their fears and go forward.",
  "Talk to someone about themselves and they’ll listen for hours.",
  "You cannot teach a man anything; you can only help him to find it within himself.",
  "Actions speak louder than words. A smile says, 'I like you. I am glad to see you.",
  "Success is getting what you want. Happiness is wanting what you get.",
  "I never did a day’s work in my life, it was all fun.",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  "Money and success don’t change people; they merely amplify what is already there.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "If you can't explain it simply, you don't understand it well enough.",
  "The most powerful weapon on earth is the human soul on fire.",
  "Be alone, that is the secret of invention; be alone, that is when ideas are born.",
  "If your hate could be turned into electricity, it would light up the whole world.",
];
let authors = [
  "__Dale Carnegie",
  "__Bill Gates",
  "__Hasan Kanaya",
  "__Mahatma Gandhi",
  "__Theodore Roosevelt",
  "__Napoleon Hill",
  "__Milton Berle",
  "__Mark Twain",
  "__Thomas Edison",
  "__Maya Angelou",
  "__Jim Rohn",
  "__Alan Kay",
  "__Confucius",
  "__Les Brown",
  "__Albert Einstein",
  "__Chinese Proverb",
  "__Mark Twain",
  "__Colin R. Davis",
  "__Helen Keller",
  "__Socrates",
  "__Benjamin Franklin",
  "__Chinese Proverbs",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Dale Carnegie",
  "__Thomas Edison",
  "__Thomas Edison",
  "__Will Smith",
  "__Albert Einstein",
  "__Albert Einstein",
  "__Ferdinand Foch",
  "__Nikola Tesla",
  "__Nikola Tesla",
];
let randomNum = Math.floor(Math.random() * quotes.length);
let textQuoto = document.querySelector(".content .text p").children[1];
let authorQuoto = document.querySelector(".author");
let mainShape = document.querySelector(".shape");
let allBtn = document.querySelectorAll(".shape .buttons button");
let speedQuote = "normal";
// variables

// Get Data From Local Storage
if (localStorage.getItem("speed") != null) {
  speedQuote = localStorage.getItem("speed");
}
if (localStorage.getItem("color") != null) {
  document.body.classList.add(`${localStorage.getItem("color")}Body`);
  allBtn.forEach((el) => {
    el.classList.add(localStorage.getItem("color"));
  });
  mainShape.classList.add(localStorage.getItem("color"));
}
// Get Data From Local Storage

// Changing the quoto
textQuoto.innerHTML = quotes[randomNum];
authorQuoto.innerHTML = authors[randomNum];
function changeQuote() {
  $(".content").fadeOut(speedQuote, function () {
    randomNum = Math.floor(Math.random() * quotes.length);
    textQuoto.innerHTML = quotes[randomNum];
    authorQuoto.innerHTML = authors[randomNum];
  });
  $(".content").fadeIn(speedQuote);
}
// Changing the quoto

// jQuery next button
$("button.next").on("click", function () {
  changeQuote();
});
// jQuery next button

// Changing Color
let colors = document.querySelectorAll(".settings .colors div");
let allColors = [];
let allBodyColors = [];

colors.forEach((e) => {
  allColors.push(e.getAttribute("data-color"));
  allBodyColors.push(`${e.getAttribute("data-color")}Body`);
  e.addEventListener("click", function () {
    // Elements

    // Body
    document.body.classList.remove(...allBodyColors);
    document.body.classList.add(`${e.getAttribute("data-color")}Body`);

    // Buttons
    allBtn.forEach((el) => {
      el.classList.remove(...allColors);
      el.classList.add(e.getAttribute("data-color"));
    });
    // Shape
    mainShape.classList.remove(...allColors);
    mainShape.classList.add(e.getAttribute("data-color"));
    // Border shape

    // Elements

    // Local Stoarge
    localStorage.setItem("color", this.getAttribute("data-color"));
    // Local Stoarge
  });
});
// Changing Color

// Changing Speed
let mainSpeed = document.querySelectorAll("div.settings .speed div");
mainSpeed.forEach((e) => {
  e.addEventListener("click", function () {
    speedQuote = e.classList.item("0");
    localStorage.setItem("speed", speedQuote);
  });
});
// Changing Speed

// Settings buttons
$(".shape .buttons .settings").on("click", function () {
  $("div.settings").animate({
    top: -250,
    opacity: 1,
  });
});
// Settings buttons

// close button settings
$(".settings button.close").on("click", function () {
  $("div.settings").animate({
    top: -500,
    opacity: 0,
  });
});
// close button settings

// Auto Button
let counter = setInterval(function () {
  console.log("hi");
}, 3000);
clearInterval(counter);

let autoBtn = document.querySelector(".shape .buttons .auto");
autoBtn.addEventListener("click", function () {
  if (autoBtn.innerText == "Auto") {
    counter = setInterval(() => {
      changeQuote();
    }, 4000);
    autoBtn.innerText = "Stop";
  } else {
    clearInterval(counter);
    clearInterval(counter);
    autoBtn.innerText = "Auto";
  }
});
// Auto Button
