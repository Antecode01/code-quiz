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
var timeRemaining = 60;
var index = 0;

var questionsArr = [
  {
    title: "what is the capital of the US",
    options: ["Seattle", "Denver", "Pheonix", "Washington DC"],
    answer: "Washington DC",
  },
  {
    title: "what is the capital of Colorado",
    options: ["aurora", "boulder", "denver", "pablo"],
    answer: "denver",
  },
  {
    title: "What is a self closing tag?",
    options: ["html", "img", "p", "h1"],
    answer: "<img>",
  },
  {
    title: "Who is right?",
    options: ["me", "you", "not me", "i dont know"],
    answer: "me",
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
initialsSubmitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var userInit = [(initials = initInput.value), (score = timeRemaining)];

  console.log(userInit);
});

function askQuestions(index) {
  questionH1.innerHTML = questionsArr[index].title;
  answer1.innerHTML = questionsArr[index].options[0];
  answer2.innerHTML = questionsArr[index].options[1];
  answer3.innerHTML = questionsArr[index].options[2];
  answer4.innerHTML = questionsArr[index].options[3];

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
}
