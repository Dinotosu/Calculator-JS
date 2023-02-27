let runningTotal = 0;
let buffer = "0";
let previosOperator;
const screen = document.querySelector(".screen");
const buttonArea = document.querySelector(".calc-btns");

buttonArea.addEventListener("click", (e) => {
  let btn = e.target;
  if (btn.classList.length === 1 || btn.classList[1] === "zero") {
    screenContent(screen, btn);
  } else if (btn.classList.contains("double")) {
    screen.textContent = "0";
  } else if (!btn.classList.contains("zero") && btn.classList.length > 1) {
    if (btn.classList[1] === "equal") {
      let buffer2 = screen.textContent;
      screen.innerText = mathMethods(+buffer, previosOperator, +buffer2);
    } else if (btn.classList[1] === "dot") {
      screen.textContent += ".";
    } else {
      buffer = screen.textContent;
      screen.textContent = "0";
      previosOperator = btn.textContent;
    }
  }
});

function screenContent(place, button) {
  place.innerText === "0"
    ? (place.innerText = +Number(button.innerText))
    : (place.innerText += +Number(button.innerText));
}

function mathMethods(buf, meth, operant) {
  switch (meth) {
    case "+":
      return (buf += operant);
    case "-":
      return (buf -= operant);
    case "÷":
      return (buf /= operant);
    case "×":
      return (buf *= operant);
  }
}
