
import { IQuizQuestion, questions } from '../models/IQuiz';
import { Player } from '../models/Player';
import { playerName } from './checkNameInput';
import { getRandomQuestions } from './shuffleQuestionArray';
import { startCountdown, startTimer } from './timers';



export function createNewPlayer(name: string): Player {
  const currentDate = new Date().toISOString();
  return new Player(`${Date.now()}`, name, 0, '00:00:00', currentDate);
}

export let selectedQuestions: IQuizQuestion[] = [];
export let player: Player | null = null;

export function resetPlayer() {
  if (player) {
    player.quizPoints = 0;  
    player = null;  
  }
}

export function playGame() {
  const userNameContainer: HTMLDivElement = document.querySelector('.userNameContainer')!;
  userNameContainer.classList.add('hidden');

  player = createNewPlayer(playerName);

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
