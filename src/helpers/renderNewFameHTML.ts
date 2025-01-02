import {  gameSection, newGameBtn } from "../main";
import { checkNameInput } from "./checkNameInput";
import { playGame } from "./playGame";

export function newGame() {
  console.log('lets play!');
  if (gameSection) {
    gameSection.innerHTML = `
      <div class="userNameContainer">
        <label>
          <span>Namn:</span>
          <div class="error-div"></div>
          <input type="text" class="name-input" id="nameInput"></input>
        </label>
        <p class="small-text">spelregler</p>
      </div>
      <div id="countdown" class="countdown"></div>
      <div id="questionContainer" class="question-container"></div>
      <div id="playGameContainer">
        <button class="play-game-btn" id="playGameBtn" disabled>Starta spelet</button>
      </div>
    `;

    // Re-select elements after the innerHTML update
    const nameInput: HTMLInputElement = document.querySelector('#nameInput')!;
    const playGameBtn: HTMLButtonElement = document.querySelector('#playGameBtn')!;
    const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
    const userNameContainer: HTMLDivElement = document.querySelector('.userNameContainer')!;

    if (nameInput && playGameBtn && playGameContainer && userNameContainer) {
      console.log('input element, playGameBtn, playGameContainer, and userNameContainer exist');
      nameInput.addEventListener('input', checkNameInput);
      playGameBtn.addEventListener('click', playGame);
    } else {
      console.error('One or more elements not found after HTML injection');
    }

    if (newGameBtn) {
      newGameBtn.disabled = true;
    }
  }
}
