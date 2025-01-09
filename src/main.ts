import { renderHighscoreSection } from './helpers/renderHighScoreHTML';
import { newGame } from './helpers/renderNewGameHTML';
import './style.scss';

//*
//
//
// VARIABLES
//
// *

export const newGameBtn: HTMLButtonElement = document.querySelector('#newGameBtn')!;
export const gameSection: HTMLElement = document.querySelector('#gameSection')!;
const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;
const highscoreSection: HTMLElement = document.querySelector('#highscoreSection')!;
const closeHighscoreBtn: HTMLButtonElement = document.querySelector('#closeHighscoreBtn')!;
export const playerPoints: HTMLSpanElement = document.querySelector('#playerPoints')!;

// const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;

export const highscoreContainer: HTMLDivElement = document.querySelector('#highscoreContainer')!;
export const nextQuestionBtn: HTMLButtonElement = document.querySelector('#nextQuestionBtn')!;
export const playerNameSpan = document.querySelector('#playerName');
export const timerDisplay = document.querySelector('#timerDisplay')!;
export const quizContainer = document.querySelector('#quiz-container');
export const endGameSection = document.querySelector('#endGameSection');

//*
//
//
// Functions to-be-cleaned-up
//
// *

function closeHighscoreModule() {
  highscoreSection?.classList.add('hidden');
}

export function highscore() {
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
