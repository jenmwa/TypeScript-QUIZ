import { endGameSection, playerPoints, progressBarContainer } from '../main';
import { playAgain } from './playAgain';

import { resetGame } from './resetGame';

import { getCurrentPlayer } from './player';
import { addHighscore, showHighscore } from './highscore';
import { showAnswers } from './showAnswers';

export function renderEndOfGameSection() {
  endGameSection.classList.remove('hidden');
  progressBarContainer.classList.add('hidden');
  playerPoints.classList.add('hidden');
  const player = getCurrentPlayer();

  if (player) {
    addHighscore(player);
  }

  if (endGameSection) {
    endGameSection.innerHTML = `
    <div> 
      <span class="congrats">Grattis</span> 
      <span class="player-name">${player?.playerName}</span> <span class="congrats"> 🎉</span>
      <p>Du klarade quizzet på ${player?.time} och fick ${player?.quizPoints} poäng!</p>
    </div>
    <div>
      <div>
        <div class="button-container">
          <button class="button play-again" id="playAgainBtn">Spela igen</button>
          <button class="button highscore-btn" id="showhighscoreBtn">Visa Highscore</button>
        </div>
        <div>
          Du kan även <button class="button tiertary-btn" id="resetBtn">Börja om från början</button> och byta ditt användarnamn och quizza igen.
        </div>
      </div>
      <div class="show-answers-container">
        <button class="button tiertary-btn" id="showAnswersBtn"> Vill du se rätt svar?</button> 
      </div>
    </div>
    `;

    const highscoreBtn: HTMLButtonElement = document.querySelector('#showhighscoreBtn')!;
    const playAgainBtn: HTMLButtonElement = document.querySelector('#playAgainBtn')!;
    const resetBtn: HTMLButtonElement = document.querySelector('#resetBtn')!;
    const showAnswersBtn: HTMLButtonElement = document.querySelector('#showAnswersBtn')!;

    playAgainBtn.addEventListener('click', playAgain);
    highscoreBtn.addEventListener('click', showHighscore);
    resetBtn.addEventListener('click', resetGame);
    showAnswersBtn.addEventListener('click', showAnswers);
  }
}
