
import { IQuizQuestion, questions } from '../models/IQuiz';
import { playerName } from './checkNameInput';
import { createNewPlayer } from './player';
import { getRandomQuestions } from './shuffleQuestionArray';
import { startCountdown, startTimer } from './timers';



export let selectedQuestions: IQuizQuestion[] = [];

export function setSelectedQuestions(questions: IQuizQuestion[]): void {
  selectedQuestions = questions;
}

export function playGame() {

  const userNameContainer: HTMLDivElement = document.querySelector('.userNameContainer')!;
  userNameContainer.classList.add('hidden');

  createNewPlayer(playerName);

  const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
  // const userNameContainer: HTMLDivElement = document.querySelector('#userContainer')!;

  if (playGameContainer && userNameContainer) {
    playGameContainer.classList.add('hidden');
    userNameContainer.classList.add('hidden');
    selectedQuestions = getRandomQuestions(questions, 10);
    startCountdown(selectedQuestions);
    startTimer();
  } else {
    console.error('playGameContainer or userNameContainer not found when trying to hide');
  }
}
