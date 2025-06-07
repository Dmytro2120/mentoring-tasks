export function setupCounter(element) {
  let counter = 0;
  let countElement = document.querySelector("#count");
  let switchText = document.getElementById("switchText");
  const colors = ["red", "blue", "green", "orange"];
  let colorIndex = 0;

  console.log(countElement);
  console.log(element);

  element.addEventListener("change", () => {
    let newCounter = counter + 1;
    counter = newCounter;
    countElement.innerHTML = newCounter;
    colorIndex = newCounter;
    switchText.style.color = colors[colorIndex];

    console.log(colorIndex);
    console.log(newCounter);
  });
}
