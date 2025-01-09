import { gameSection } from '../main';
import { quizPoints } from './countPoints';
import { player } from './playGame';
import { renderEndOfGameSection } from './renderEndOfGameSection';
import { formatTime, timeLeft, timerInterval } from './timers';

export function endOfGame() {

  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  const formattedTime = formatTime(timeLeft);

  if (player) {
    player.quizPoints = quizPoints;
    player.time = formattedTime;
    console.log(player);
  }

  gameSection.classList.add('hidden');
  renderEndOfGameSection();
}
