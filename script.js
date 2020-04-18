var startDIv = document.querySelector(".start");
var startBtn = document.querySelector(".startBtn");
var questionsDiv = document.querySelector(".questions");
var timer = document.querySelector(".timer");
var answer1 = document.querySelector(".ans1");
var answer2 = document.querySelector(".ans2");
var answer3 = document.querySelector(".ans3");
var answer4 = document.querySelector(".ans4");
var questionH1 = document.querySelector(".questionsH1");
var answersDiv = document.querySelector(".answers");
var initials = document.querySelector(".initials");
var initialsSubmitBtn = document.querySelector(".initialsSubmit");
var form = document.querySelector(".form");
var initInput = document.querySelector(".initInput");
var lastScore = document.querySelector(".lastScore");
var timeRemaining = 60;
var index = 0;

var questionsArr = [
  {
    title:
      "what is the HTML tag under which one can write the javascript code ?",
    options: ["scripted", "javascript", "script", "js"],
    answer: "script",
  },
  {
    title: "which of the following is not a reserved word in javascript",
    options: ["interface", "throws", "program", "short"],
    answer: "program",
  },
  {
    title: "What is a self closing tag?",
    options: ["html", "img", "p", "h1"],
    answer: "img",
  },
  {
    title: "how do we write an IF statement in javascript?",
    options: ["if i=5 then", "ifi==5 then", "if(i==5)", "if i=5"],
    answer: "if(i==5)",
  },
];

questionsDiv.style.display = "none";
initials.style.display = "none";

startBtn.addEventListener("click", function (event) {
  startDIv.style.display = "none";
  questionsDiv.style.display = "block";
  askQuestions(index);
  var interval = setInterval(function () {
    timer.innerHTML = timeRemaining;
    timeRemaining--;
    if (timeRemaining <= 0) {
      clearInterval(interval);
    }
  }, 1000);
});

function askQuestions(index) {
  questionH1.innerHTML = questionsArr[index].title;
  answer1.innerHTML = questionsArr[index].options[0];
  answer2.innerHTML = questionsArr[index].options[1];
  answer3.innerHTML = questionsArr[index].options[2];
  answer4.innerHTML = questionsArr[index].options[3];
}

answersDiv.addEventListener("click", function (event) {
  index++;
  if (event.target.innerHTML === questionsArr[0].answer) {
  } else {
    timeRemaining = timeRemaining - 10;
  }
  if (index > questionsArr.length - 1) {
    questionsDiv.style.display = "none";
    initials.style.display = "block";
  } else {
    askQuestions(index);
  }
});

initialsSubmitBtn.addEventListener("click", function (event) {
  var userInit = { initials: initInput.value, score: timeRemaining };

  localStorage.setItem("initials", JSON.stringify(userInit));
  initials.style.display = "none";
  startDIv.style.display = "block";
});

var localStorageScore = JSON.parse(localStorage.getItem("initials"));

if (localStorageScore !== null) {
  lastScore.innerHTML =
    "Last score was: " +
    localStorageScore.score +
    " by: " +
    localStorageScore.initials;
}
