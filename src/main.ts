
import { countPoints } from './helpers/countPoints';
import { selectedQuestions } from './helpers/playGame';
import { renderHighscoreSection } from './helpers/renderHighScoreHTML';
import { newGame } from './helpers/renderNewFameHTML';
import { renderQuestion } from './helpers/renderQuestionHTML';
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

// const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
let currentQuestionIndex = 0;

export const highscoreContainer: HTMLDivElement = document.querySelector('#highscoreContainer')!;
export const nextQuestionBtn: HTMLButtonElement = document.querySelector('#nextQuestionBtn')!;
export const playerNameSpan = document.querySelector('#playerName');
export const timerDisplay = document.getElementById('timerDisplay')!;
export const quizContainer = document.getElementById('quiz-container');


//*
//
//
// Functions to-be-cleaned-up
//
// *

export function nextQuestion(): void {
  console.log('Next question');

  countPoints(selectedQuestions, currentQuestionIndex);
  
  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    renderQuestion(selectedQuestions, currentQuestionIndex); 
  } else {
    console.log('Game Over! No more questions.');
   
  }

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
