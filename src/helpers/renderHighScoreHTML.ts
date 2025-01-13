import { highscoreContainer } from '../main';
import { highscoreList } from './highscore';

export function renderHighscoreSection() {
  highscoreContainer.innerHTML = '';

  let highscoreHTML = `
    <ol class="highscore-list">
  `;

  highscoreList.forEach(player => {
    highscoreHTML += `
      <li class="highscore-player">
        <span>${player.playerName}</span>
        <span>Poäng: ${player.quizPoints}</span>
        <span>Tid: ${player.time}</span>
      </li>
    `;
  });
  highscoreHTML += `</ol>`;

  highscoreContainer.innerHTML = highscoreHTML;
}
