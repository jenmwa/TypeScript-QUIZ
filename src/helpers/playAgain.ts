import { createNewPlayer, getCurrentPlayer } from './player';
import { resetCurrentQuestionIndex } from './nextQuestion';
import { resetPlayer } from './resetPlayer';
import { resetTimer, startCountdown, startTimer } from './timers';
import { playAgainPage } from './classList';
import { selectedQuestions, setSelectedQuestions } from './playGame';
import { questions } from '../models/IQuiz';
import { getRandomQuestions } from './shuffleQuestionArray';
import {  updateProgressBar } from './updateProgressBar';
import { totalQuestions } from '../main';



export function playAgain() {
  const player = getCurrentPlayer();

  resetCurrentQuestionIndex();
  setSelectedQuestions(getRandomQuestions(questions, totalQuestions));

  resetPlayer();

  if (player) {
    createNewPlayer(player.playerName);
  }

  const questionContainer = document.querySelector('#questionContainer');
  if (questionContainer) {
    questionContainer.innerHTML = '';
  }

  const countdownElement = document.querySelector('#countdown');
  if (countdownElement) {
    countdownElement.classList.remove('hidden');
  }
  startCountdown(selectedQuestions);
  startTimer();
  resetTimer();
  updateProgressBar();
  playAgainPage();
}
