let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      if (eval(screenValue)) {
        screen.value = eval(screenValue);
      } else {
        screen.value = "bad input";
      }
    } else if (buttonText == "CE") {
      screenValue = "";
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

// bad input
// nuro
//9%7 auto add )
