import { endGameSection, playerPoints, progressBarContainer } from '../main';
import { playAgain } from './playAgain';

import { resetGame } from './resetGame';
import { addHighscore, showHighscore } from './renderHighScoreHTML';
import { getCurrentPlayer } from './player';

export function renderEndOfGameSection() {
  progressBarContainer.classList.add('hidden');
  playerPoints.classList.add('hidden');
  const player = getCurrentPlayer();

  if(player){
    addHighscore(player)
  }

  if (endGameSection) {
    endGameSection.innerHTML = `
     <p>
      <span class="congrats">GRATTIS</span> 
      <span class="player-name">${player?.playerName}</span>, 
      Du klarade quizzet på ${player?.time} och fick ${player?.quizPoints} poäng! 🎉
    </p>
    <div>
      <button class="button play-again" id="playAgainBtn">Spela igen</button>
      <button class="button highscore-btn" id="showhighscoreBtn">Visa Highscore</button>
      <button class="button reset-btn" id="resetBtn">Börja om från början</button>
    </div>
    <div>
      Vill du se rätt svar?
    </div>
    `;

    const highscoreBtn: HTMLButtonElement = document.querySelector('#showhighscoreBtn')!;
    const playAgainBtn: HTMLButtonElement = document.querySelector('#playAgainBtn')!;
    const resetBtn: HTMLButtonElement = document.querySelector('#resetBtn')!;

    playAgainBtn.addEventListener('click', playAgain);
    highscoreBtn.addEventListener('click', showHighscore);
    resetBtn.addEventListener('click', resetGame);
  }
}
