import { endGameSection, gameSection } from '../main';
import { getCurrentPlayer } from './player';

import { renderEndOfGameSection } from './renderEndOfGameSection';
import { formatTime, timeLeft, timerInterval } from './timers';

export function endOfGame() {
  const player = getCurrentPlayer();
  endGameSection.classList.remove('hidden');

  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  const formattedTime = formatTime(timeLeft);

  if (player) {
    player.time = formattedTime;
  }

  gameSection.classList.add('hidden');
  renderEndOfGameSection();
}
