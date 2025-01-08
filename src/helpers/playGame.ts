import { IQuizQuestion, questions } from '../models/IQuiz';
import { Player } from '../models/Player';
import { playerName } from './checkNameInput';
import { getRandomQuestions } from './shuffleQuestionArray';
import { startCountdown, startTimer } from './timers';

export let selectedQuestions: IQuizQuestion[] = [];
export let player: Player | null = null;

export function playGame() {
  const currentDate = new Date();
  player = new Player(`${Date.now()}`, playerName, 0, '00:00:00', currentDate);
  console.log('New player created:', player);


  const playGameContainer: HTMLDivElement = document.querySelector('#playGameContainer')!;
  const userNameContainer: HTMLDivElement = document.querySelector('.userNameContainer')!;

  if (playGameContainer && userNameContainer) {
    playGameContainer.classList.add('hidden');
    userNameContainer.classList.add('hidden');

    console.log('LETS PLAY');
    console.log('playername is:', playerName);
    selectedQuestions = getRandomQuestions(questions, 10);
    console.log(selectedQuestions);
    startCountdown(selectedQuestions);
    startTimer();
  } else {
    console.error('playGameContainer or userNameContainer not found when trying to hide');
  }
}
