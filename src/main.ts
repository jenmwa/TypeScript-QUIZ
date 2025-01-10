import { highscore } from './helpers/renderHighScoreHTML';
import { newGame } from './helpers/renderNewGameHTML';
import './style.scss';

//*
//
//
// VARIABLES
//
// *

export const startSection: HTMLElement = document.querySelector('#startSection')!;
export const userContainer: HTMLDivElement = document.querySelector('#userContainer')!;
export const newGameBtn: HTMLButtonElement = document.querySelector('#newGameBtn')!;
export const gameSection: HTMLElement = document.querySelector('#gameSection')!;
const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;
export const highscoreSection: HTMLElement = document.querySelector('#highscoreSection')!;
const closeHighscoreBtn: HTMLButtonElement = document.querySelector('#closeHighscoreBtn')!;
export const playerPoints: HTMLSpanElement = document.querySelector('#playerPoints')!;

// const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
export const progressBarContainer = document.querySelector('#progressBarContainer')!;

export const highscoreContainer: HTMLDivElement = document.querySelector('#highscoreContainer')!;
export const nextQuestionBtn: HTMLButtonElement = document.querySelector('#nextQuestionBtn')!;
export const playerNameSpan = document.querySelector('#playerName')!;
export const timerDisplay = document.querySelector('#timerDisplay')!;
export const quizContainer = document.querySelector('#quiz-container')!;
export const endGameSection = document.querySelector('#endGameSection')!;

//*
//
//
// Functions to-be-cleaned-up
//
// *

function closeHighscoreModule() {
  highscoreSection?.classList.add('hidden');
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
