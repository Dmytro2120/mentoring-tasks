import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="switch-container">
      <label for="switch">
        <span id="switchText">Switch controler (<span id="count">0</span>)</span>
        <input type="checkbox" id="switch" class="switch-input" />
        <div for="switch" class="switch-label"></div>
      </label>
    </div>
  </div>
`;

setupCounter(document.querySelector("#switch"));
