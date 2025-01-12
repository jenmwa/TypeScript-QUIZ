import { newGame } from './helpers/renderNewGameHTML';
import { closeHighscoreModule, showHighscore } from './helpers/highscore';
import './style/style.scss';

export const totalQuestions = 10;

export const startSection: HTMLElement = document.querySelector('#startSection')!;
export const userContainer: HTMLDivElement = document.querySelector('#userContainer')!;
export const newGameBtn: HTMLButtonElement = document.querySelector('#newGameBtn')!;
export const gameSection: HTMLElement = document.querySelector('#gameSection')!;
export const highscoreSection: HTMLElement = document.querySelector('#highscoreSection')!;
export const playerPoints: HTMLSpanElement = document.querySelector('#playerPoints')!;
export const overviewContainer: HTMLDivElement = document.querySelector('#overviewContainer')!;
export const progressBarContainer: HTMLDivElement = document.querySelector('#progressBarContainer')!;
export const questionOverview: HTMLDivElement = document.querySelector('#questionOverview')!;
export const highscoreContainer: HTMLDivElement = document.querySelector('#highscoreContainer')!;
export const nextQuestionBtn: HTMLButtonElement = document.querySelector('#nextQuestionBtn')!;
export const playerNameSpan: HTMLSpanElement = document.querySelector('#playerName')!;
export const timerDisplay: HTMLSpanElement = document.querySelector('#timerDisplay')!;
export const quizContainer = document.querySelector('#quiz-container')!;
export const endGameSection = document.querySelector('#endGameSection')!;
const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;
const closeHighscoreBtn: HTMLButtonElement = document.querySelector('#closeHighscoreBtn')!;

newGameBtn?.addEventListener('click', newGame);
highscoreBtn?.addEventListener('click', showHighscore);
closeHighscoreBtn?.addEventListener('click', closeHighscoreModule);
