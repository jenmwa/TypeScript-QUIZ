
import { highscoreWrapper } from '../main';
import { highscoreList } from './highscore';

export function renderHighscoreSection() {
  highscoreWrapper.innerHTML = '';
  let highscoreHTML = `
  <div class="table-wrapper">
    <table class="highscore-table">
      <thead>
        <tr>
          <th>Placering</th>
          <th>Spelare</th>
          <th>Poäng</th>
          <th>Tid</th>
        </tr>
      </thead>
      <tbody>
  `;

  highscoreList.slice(0, 10).forEach((player, index) => {
    const position = index + 1;

    highscoreHTML += `
      <tr class="highscore-player">
        <td>${position}</td>
        <td>${player.playerName}</td>
        <td>${player.quizPoints}</td>
        <td>${player.time}</td>
      </tr>
    `;
  });

  highscoreHTML += `</tbody></table></div>`;

  highscoreWrapper.innerHTML = highscoreHTML;
}
