let buttons = document.getElementsByClassName("pixel");

for (button of buttons) {
  button.addEventListener("click", (e) => {
    e.target.classList.toggle("pixelClicked");
  });
}

// console.log(e);
// let buttonColor = e.target.style.backgroundColor;
// console.log(buttonColor);
// if (buttonColor == "red") {
//   e.target.style.backgroundColor = "white";
// } else {
//   e.target.style.backgroundColor = "red";
// }

// let isClicked = e.target.classList.contains("pixelClicked");
// if (isClicked == "true") {
//   e.target.classList.remove("pixelClicked");
// } else {
//   e.target.classList.add("pixelClicked");
// }
