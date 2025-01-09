import { highscoreContainer, highscoreSection } from '../main';
import { Player } from '../models/Player';

export const highscoreList: Player[] = [
  new Player('1', 'Alice', 10, '00:05:23', String(new Date())),
  new Player('2', 'Bob', 15, '00:06:10', String(new Date())),
];

export function highscore() {
  console.log('show highscore!');
  highscoreSection?.classList.remove('hidden');
  renderHighscoreSection();
}

export function renderHighscoreSection() {
  if (highscoreContainer) {
    highscoreContainer.innerHTML = 'lets fill this list';
    console.log('highscorelist is:', highscoreList);
    // }
    if (highscoreList) {
      console.log('highscoreList is:', highscoreList);
    }
  }
}
