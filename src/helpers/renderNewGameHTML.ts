import { gameSection, startSection } from '../main';
import { checkNameInput } from './checkNameInput';
import { playGame } from './playGame';

export function newGame() {
  startSection.classList.add('hidden');
  gameSection.classList.remove('hidden');

  if (gameSection) {
    gameSection.innerHTML = `

      <div class="user-name-container" id="userNameContainer">
      <div class=" text-container">
        <h2>Börja med att välja ett användarnamn 🎉.</h2>
        <p>Du får 10 frågor om TypeScript, varje fråga har tre alternativ – men bara ett rätt svar. </p>
        <p>Svara rätt och snabbt för att samla poäng, men tänk på att fel svar ger minuspoäng!</p> 
        <p>Dina poäng sparas i localStorage, så rensar du webbläsarens 
         cache nollställs rankingen. Se om du kan klättra högst upp på highscorelistan! </p>
         <p>Lycka till!</p>
      </div>
        <label>
          <span>Användarnamn:</span>
          <div class="error-div"></div>
          <input type="text" class="name-input" id="nameInput"></input>
        </label>
      </div>
      <div id="countdown" class="countdown"></div>
      <div id="questionContainer" class="question-container"></div>
      <div id="playGameContainer">
        <button class="play-game-btn" id="playGameBtn" disabled>Starta spelet</button>
      </div>

    `;

    const nameInput: HTMLInputElement = document.querySelector('#nameInput')!;
    const playGameBtn: HTMLButtonElement = document.querySelector('#playGameBtn')!;
    const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
    const userNameContainer: HTMLDivElement = document.querySelector('#userNameContainer')!;
    const questionContainer = document.querySelector('#questionContainer')!;
    questionContainer.classList.add('hidden')

    if (nameInput && playGameBtn && playGameContainer && userNameContainer) {
      nameInput.addEventListener('input', checkNameInput);
      playGameBtn.addEventListener('click', playGame);
    } else {
      console.error('One or more elements not found');
    }
  }
}
