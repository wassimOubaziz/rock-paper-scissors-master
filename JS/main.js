const closeBtn = document.querySelector(".show .whit .fl img");
const showElement = document.querySelector(".show");

const rulesBtn = document.querySelector("body .rules button");
let show = false;

const chose = document.querySelectorAll("body .choice .rock.k");

const playerChose = document.querySelector("body .choice");
const arr = ["paper", "scissors", "rock1"];

//random function
function random(num) {
  return Math.floor(Math.random() * num);
}

/* 01 */
// this for aking rules btn work
closeBtn.addEventListener("click", function () {
  showElement.style.display = "none";
  show = false;
});

rulesBtn.addEventListener("click", function () {
  showElement.style.display = "flex";
  show = true;
});

window.addEventListener("keydown", function (e) {
  if (e.code == "Escape" && show) {
    showElement.style.display = "none";
    show = false;
  } else {
    showElement.style.display = "flex";
    show = true;
  }
});

/* 01 */

const waiting = document.querySelector("body .waiting");
const house = waiting.querySelector(".house");
const you = waiting.querySelector(".you");
const play = waiting.querySelector(".play");
const scoreElement = document.querySelector("body .main .score h1");
const playBtn = waiting.querySelector(".play button");
const before = waiting.querySelector(".before");
let score = 12;
/* 02 */

function make(num) {
  return `<div class="rock ${arr[num]} " data-set="${num}">
  <img src="./images/icon-${arr[num]}.svg" alt="paper" />
</div>`;
}

chose.forEach((element) => {
  element.addEventListener("click", function () {
    playerChose.style.display = "none";
    waiting.style.display = "flex";
    const data = +element.dataset.set;
    you.insertAdjacentHTML("beforeend", make(data));
    const rand = random(3);
    setTimeout(function () {
      house.innerHTML = `<h2>THE HOUSE PICKED</h2>`;
      house.insertAdjacentHTML("beforeend", make(rand));
      before.style.display = "none";
      play.querySelector("h1").textContent = checkTheWinner(data, rand);
      scoreElement.textContent = score;
      play.style.display = "block";
      waiting.style.justifyContent = "space-evenly";
    }, 3000);

    //waiting.
  });
});
const win = document.querySelector(".win");
const lose = document.querySelector(".lose");
function checkTheWinner(data, rand) {
  if (data - rand === 1 || (data === 0 && rand === 2)) {
    score++;
    you.querySelector("div").classList.add("active");
    win.style.display = "block";
    win.play();
    setTimeout(function () {
      win.style.display = "none";
    }, 1500);
    return "you win";
  } else if (data - rand === 0) {
    return "draw";
  } else {
    house.querySelector("div").classList.add("active");
    score--;
    lose.style.display = "block";
    lose.play();
    setTimeout(function () {
      lose.style.display = "none";
    }, 1500);
    return "you lose";
  }
}

playBtn.addEventListener("click", function () {
  playerChose.style.display = "block";
  waiting.style.display = "none";
  before.style.display = "";
  play.style.display = "none";
  lose.pause();
  win.pause();
  waiting.style.justifyContent = "space-around";
  you.innerHTML = "<h2>YOU PICKED</h2>";
  house.innerHTML = `<h2>THE HOUSE PICKED</h2>
  <div class="before"></div>`;
});
