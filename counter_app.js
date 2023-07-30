let counter = 0;

const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const increment5Button = document.querySelector("#increment-5");
const decrement5Button = document.querySelector("#decrement-5");
const resetButton = document.querySelector("#reset");
const userInput = document.querySelector("#user-input");
const counterElement = document.querySelector("#counter");

incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});

decrementButton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter;
});

increment5Button.addEventListener("click", () => {
  counter += 5;
  counterElement.textContent = counter;
});

decrement5Button.addEventListener("click", () => {
  counter -= 5;
  counterElement.textContent = counter;
});

resetButton.addEventListener("click", () => {
  counter = 0;
  counterElement.textContent = counter;
});

userInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    const input = userInput.value;
    counter += parseInt(input);
    counterElement.textContent = counter;
    userInput.value = "";
  }
});
