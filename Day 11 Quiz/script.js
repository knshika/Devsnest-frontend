let questions = [
  {
    question: "Name the town in which The Vampire Diaries is located?",
    options: ["Mystic Falls", "The Cave", "The Falls", "Mystical Land"],
    answer: 0,
  },
  {
    question: "Who was the first one in taking the cure?",
    options: ["Katherine", "Rebekah", "Klaus", "Stefan"],
    answer: 0,
  },
  {
    question: " Bonnie started college later than the other girls, why's that?",
    options: [
      "She was dead",
      "She didn't wanted to start so soon",
      "She was with her family",
      "She was in Coma",
    ],
    answer: 0,
  },
  {
    question: "What is the thing that Klaus needs to make hybrids?",
    options: [
      "Elena's Blood",
      "A Child's Blood",
      "His Mother's Blood",
      "Lonnie's Blood",
    ],
    answer: 0,
  },
  {
    question: "What is the main reason that Stefan was attracted to Elena?",
    options: [
      "Because she looked like Katherine",
      "Because he wanted to kill her",
      "Because he saved her",
      "Because she was pretty",
    ],
    answer: 0,
  },
  {
    question: "What is the thing that protects Stefan and Damon from the sun?",
    options: [
      "The rings they have",
      "Because they were turned by a doppalganger",
      "The blood they have",
      "Because they have the power to tolerate sun rays",
    ],
    answer: 0,
  },
  {
    question: " Who started Elena's doppelganger line?",
    options: ["Amara", "Tatia", "Katherine", "Elena"],
    answer: 0,
  },
  {
    question: " Who are the vampire brothers?",
    options: [
      "Stefan and Damon",
      "Klaus and Elija",
      "Klaus and Kol",
      "Enzo and Alaric",
    ],
    answer: 0,
  },
  {
    question:
      " What was Stefan known as when he started drinking human blood and killed them?",
    options: ["Ripper", "Vamp", "Alien", "Dog"],
    answer: 0,
  },
  {
    question: "What did the vampires hate?",
    options: ["Vervain", "Chocolate", "Roses", "Garlic"],
    answer: 0,
  },
];

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

let quizSection = document.querySelector(".quiz-section");

//creating questions card for each cards
shuffle(questions);

const quesArray = questions.map((currQues, quesNo) => {
  const container = document.createElement("div");
  container.className = "quiz-card";

  quizSection.append(container);

  const question = document.createElement("div");
  question.className = "quiz-ques";
  question.innerText = `Q${quesNo + 1}  ${currQues.question}`;
  container.append(question);

  const options = document.createElement("div");
  options.className = "quiz-option";
  container.append(options);

  let isClicked = false;

  const optionButtons = currQues.options.map((option) => {
    const optionButton = document.createElement("button");
    optionButton.className = "option";

    optionButton.addEventListener("click", (e) => {
      if (!isClicked) {
        isClicked = true;
      } else {
        return;
      }
      check(option, currQues, optionButton);

      //   console.log(option);
      //   console.log(currQues.options[currQues.answer]);
    });
    optionButton.innerText = option;
    return optionButton;
  });

  shuffle(optionButtons);
  optionButtons.forEach((option) => {
    options.append(option);
  });

  //return the array of ques (map function)
  return container;
});

// console.log(quesArray);
quesArray[0].classList.add("curr-quiz");

let currQuesNo = 0;
let showScore = document.querySelector("#score");
let score = 0;

//checks if option is correct
function check(option, currQues, optionButton) {
  if (option === currQues.options[currQues.answer]) {
    optionButton.classList.add("correct");
    score++;
    showScore.innerText = `${score}/10`;
  } else {
    optionButton.classList.add("wrong");
  }

  setTimeout(() => {
    quesArray[currQuesNo].classList.remove("curr-quiz");
    currQuesNo++;
    quesArray[currQuesNo].classList.add("curr-quiz");
  }, 1500);
}
