const colors = ["red", "blue", "green", "orange"];

const randomIndex = (prevIndex) => {
  let colorIndex = Math.floor(Math.random() * 4);
  if (prevIndex === colorIndex) {
    console.log("if prevIndex", prevIndex);
    return randomIndex(prevIndex);
  } else {
    console.log("colorIndex", colorIndex);
    return colorIndex;
  }
};

export function setupCounter(element) {
  let counter = 0;
  let countElement = document.querySelector("#count");
  let switchText = document.getElementById("switchText");
  let colorIndex = 0;
  console.log(countElement);
  console.log(element);

  element.addEventListener("change", () => {
    let newCounter = counter + 1;
    console.log("change color", colorIndex);
    colorIndex = randomIndex(colorIndex);
    counter = newCounter;
    countElement.innerHTML = newCounter;
    switchText.style.color = colors[colorIndex];

    console.log("change color after", colorIndex);
    // console.log("newCounter", newCounter);
  });
}
