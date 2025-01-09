import { endGameSection } from '../main';
import { player } from './playGame';
import { highscore } from '../main';
import { playAgain } from './playAgain';

export function renderEndOfGameSection() {
  console.log('render: Congrats userName, you finished the quiz in xx:xx:xx and got xx points!');
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
    </div>
    <div>
      Vill du se rätt svar?
    </div>
    `;
    
    const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;
    const playAgainBtn: HTMLButtonElement = document.querySelector('#playAgainBtn')!;

    playAgainBtn.addEventListener('click', playAgain);

    highscoreBtn.addEventListener('click', highscore);
    


  }
}


