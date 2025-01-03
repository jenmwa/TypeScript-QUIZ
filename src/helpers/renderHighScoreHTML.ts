import { highscoreContainer } from '../main';
import { Player } from '../models/Player';

export const highscoreList: Player[] = [
  new Player('Alice', 10, '00:05:23', new Date()),
  new Player('Bob', 15, '00:06:10', new Date()),
];

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
