import { highscoreContainer, highscoreSection } from '../main';
import { Player } from '../models/Player';

const mockHighscores: Player[] = [
  new Player('1', 'Alice', 6, '00:05:23', String(new Date())),
  new Player('2', 'Bob', 8, '00:06:10', String(new Date())),
  new Player('3', 'Charlie', 2, '00:07:15', String(new Date())),
];

export const highscoreList: Player[] = JSON.parse(localStorage.getItem('highscoreList') || '[]').map(
  (score: Player) => new Player(score.id, score.playerName, score.quizPoints, score.time, score.date)
);

if (highscoreList.length === 0) {
  highscoreList.push(...mockHighscores);
  saveHighscores(); 
}

export function showHighscore() {
  console.log('show highscore!');
  highscoreSection?.classList.remove('hidden');
  renderHighscoreSection();
}

export function renderHighscoreSection() {
  highscoreContainer.innerHTML = '';
  let highscoreHTML = '';
  highscoreList.forEach(player => {
    highscoreHTML += `
      <div class="highscore-player">
        <p>${player.playerName}</p>
        <p>Score: ${player.quizPoints}</p>
      </div>
    `;
  });

  highscoreContainer.innerHTML = highscoreHTML;
};



export function addHighscore(newPlayer: Player) {
  highscoreList.push(newPlayer);

  highscoreList.sort((a, b) => b.quizPoints - a.quizPoints);
//lägg till OM samma betyg, snabbast är bättre
  if (highscoreList.length > 10) {
    highscoreList.pop();
  }

  saveHighscores();
}

export function saveHighscores() {
  localStorage.setItem('highscoreList', JSON.stringify(highscoreList));
}
