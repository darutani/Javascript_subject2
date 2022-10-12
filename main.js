let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");

function buttonPressed(Event) {
  const text = Event.target.textContent;

  if (text === "=") {
      display.textContent = eval(display.textContent);
  } else if (text === "AC"){
      display.textContent = 0;
  } else {
      if (display.textContent === "0") {
        display.textContent = text;
      } else {
        display.textContent += text;
      }
  }
}

buttons.forEach((button) => {addEventListener("click", buttonPressed);});
