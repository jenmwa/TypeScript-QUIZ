import { highscoreContainer } from '../main';
import { highscoreList } from './highscore';

export function renderHighscoreSection() {
  highscoreContainer.innerHTML = '';
  let highscoreHTML = '';
  highscoreList.forEach(player => {
    highscoreHTML += `
      <div class="highscore-player">
        <p>${player.playerName}</p>
        <p>Score: ${player.quizPoints}</p>
        <p>Time: ${player.time}</p>
      </div>
    `;
  });

  highscoreContainer.innerHTML = highscoreHTML;
}
