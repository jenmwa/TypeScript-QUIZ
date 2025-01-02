import { highscoreContainer } from '../main';
import { highscoreList } from '../models/IHighscore';

export function renderHighscoreSection() {
  if (highscoreContainer) {
    highscoreContainer.innerHTML = 'lets fill this list';
    console.log('highscorelist is:', highscoreList);
  }
}
