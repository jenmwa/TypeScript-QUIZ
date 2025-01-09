import { endGameSection } from '../main';
import { player } from './playGame';
import { playAgain } from './playAgain';
import { highscore } from './classList';
import { resetGame } from './resetGame';

export function renderEndOfGameSection() {
  if (endGameSection) {
    endGameSection.innerHTML = `
     <p>
      <span class="congrats">Congrats</span> 
      <span class="player-name">${player?.playerName}</span>, 
      you finished the quiz in ${player?.time} and got ${player?.quizPoints} points! 🎉
    </p>
    <div>
      <button class="button play-again" id="playAgainBtn">Spela igen</button>
      <button class="button highscore-btn" id="highscoreBtn">Highscore</button>
      <button class="button reset-btn" id="resetBtn">Börja om från början</button>
    </div>
    <div>
      Vill du se rätt svar?
    </div>
    `;
    
    const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;
    const playAgainBtn: HTMLButtonElement = document.querySelector('#playAgainBtn')!;
    const resetBtn: HTMLButtonElement = document.querySelector('#resetBtn')!;

    playAgainBtn.addEventListener('click', playAgain);
    highscoreBtn.addEventListener('click', highscore);
    resetBtn.addEventListener('click', resetGame)
    


  }
}


