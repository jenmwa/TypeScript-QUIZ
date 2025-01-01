import { renderHighscoreSection } from './helpers/renderHTML';
import { getRandomQuestions } from './helpers/shuffleQuestionArray';
import { startCountdown, startTimer } from './helpers/timers';
import { questions } from './models/IQuiz';
import './style.scss';

//*
//
//
// VARIABLES
//
// *

const newGameBtn: HTMLButtonElement = document.querySelector('#newGameBtn')!;
const highscoreSection: HTMLElement = document.querySelector('#highscoreSection')!;
const closeHighscoreBtn: HTMLButtonElement = document.querySelector('#closeHighscoreBtn')!;
const gameSection: HTMLElement = document.querySelector('#gameSection')!;
const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;

// const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;

export const highscoreContainer: HTMLDivElement = document.querySelector('#highscoreContainer')!;
export const playerNameSpan = document.querySelector('#playerName');
export const timerDisplay = document.getElementById('timerDisplay')!;
export const quizContainer = document.getElementById('quiz-container');

export let playerName: string = '';

//*
//
//
// Functions to-be-cleaned-up
//
// *

function newGame() {
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

function checkNameInput() {
  const nameInput: HTMLInputElement = document.querySelector('#nameInput')!;
  const playGameBtn: HTMLButtonElement = document.querySelector('#playGameBtn')!;

  if (nameInput && playGameBtn) {
    if (nameInput.value.length >= 3) {
      playGameBtn.disabled = false;
    } else {
      playGameBtn.disabled = true;
    }

    console.log('Input value has changed to:', nameInput.value);
    playerName = nameInput.value;
  } else {
    console.error('nameInput or playGameBtn element not found in checkNameInput');
  }
}

console.log('playername is:', playerName);

function playGame() {
  const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
  const userNameContainer: HTMLDivElement = document.querySelector('.userNameContainer')!;

  if (playGameContainer && userNameContainer) {
    playGameContainer.classList.add('hidden');
    userNameContainer.classList.add('hidden');

    console.log('LETS PLAY');
    console.log('playername is:', playerName);
    const selectedQuestions = getRandomQuestions(questions, 10);
    console.log(selectedQuestions);
    startCountdown(selectedQuestions);
    startTimer();
  } else {
    console.error('playGameContainer or userNameContainer not found when trying to hide');
  }
}

export function nextQuestion(): void {
  console.log('Next question');
  //checka svar - rätt 1p:
  //visa next index: 
}

function closeHighscoreModule() {
  highscoreSection?.classList.add('hidden');
}

function highscore() {
  console.log('show highscore!');
  highscoreSection?.classList.remove('hidden');
  renderHighscoreSection();
}

//*
//
//
// EVENTLISTENERS
//
// *

newGameBtn?.addEventListener('click', newGame);
highscoreBtn?.addEventListener('click', highscore);
closeHighscoreBtn?.addEventListener('click', closeHighscoreModule);

// renderQuiz(questions);
