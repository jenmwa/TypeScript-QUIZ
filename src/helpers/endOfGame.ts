import { endGameSection, gameSection } from '../main';
import { player } from './playGame';
import { renderEndOfGameSection } from './renderEndOfGameSection';
import { formatTime, timeLeft, timerInterval } from './timers';

export function endOfGame() {
  endGameSection.classList.remove('hidden');

  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  const formattedTime = formatTime(timeLeft);

  if (player) {
    player.time = formattedTime;
    console.log(player);
  }

  gameSection.classList.add('hidden');
  renderEndOfGameSection();
}
