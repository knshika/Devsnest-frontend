const names = [
  "Knshika",
  "pathetic",
  "bilazee",
  "goblin",
  "akhil",
  "Indo",
  "Anmol",
  "Sherl",
  "Knshika",
  "pathetic",
  "bilazee",
  "goblin",
  "akhil",
  "Indo",
  "Anmol",
  "Sherl",
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

shuffle(names);

let firstCard;
let secondCard;
let moveLeft = 15;
let movesWrapper = document.querySelector(".moves");

function handleCardClick(currentCard) {
  console.log(moveLeft);
  currentCard.classList.toggle("rotate");
  const cardValue = currentCard.getAttribute("data-value");
  console.log(cardValue);
  if (!firstCard) {
    firstCard = currentCard;
    moveLeft--;
  } else if (!secondCard) {
    moveLeft--;
    secondCard = currentCard;
    if (firstCard.getAttribute("data-value") !== cardValue) {
      setTimeout(() => {
        firstCard.classList.remove("rotate");
        secondCard.classList.remove("rotate");
        firstCard = null;
        secondCard = null;
      }, 2000);
    } else {
      moveLeft++;
    }
  } else {
    moveLeft--;
    if (
      firstCard.getAttribute("data-value") !==
      secondCard.getAttribute("data-value")
    ) {
      firstCard.classList.remove("rotate");
      secondCard.classList.remove("rotate");
    }
    firstCard = currentCard;
    secondCard = null;
  }
  movesWrapper.innerText = moveLeft;
}

for (const name of names) {
  let card = document.createElement("div");
  card.className = "flip-card";
  card.setAttribute("data-value", name);
  card.innerHTML = `
    <div class="flip-card-inner">
        <div class="flip-card-front"></div>
        <div class="flip-card-back">
            <h1>${name}</h1> 
        </div>
    </div>`;
  document.getElementById("gameCards").appendChild(card);
  card.addEventListener("click", (e) => handleCardClick(card));
}
