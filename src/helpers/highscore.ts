import { highscoreSection } from '../main';
import { highscoreMockData } from '../mock/highscoreMockData';
import { Player } from '../models/Player';
import { renderHighscoreSection } from './renderHighScoreHTML';

export function showHighscore() {
  highscoreSection?.classList.remove('hidden');
  renderHighscoreSection();
}

export function closeHighscoreModule() {
  highscoreSection?.classList.add('hidden');
}

export const highscoreList: Player[] = JSON.parse(localStorage.getItem('highscoreList') || '[]').map(
  (score: Player) => new Player(score.id, score.playerName, score.quizPoints, score.time, score.date)
);

if (highscoreList.length === 0) {
  highscoreList.push(...highscoreMockData);
  saveHighscores();
}

export function addHighscore(newPlayer: Player) {
  highscoreList.push(newPlayer);

  highscoreList.sort((a, b) => b.quizPoints - a.quizPoints);
  //lägg till OM samma score, snabbast är bättre
  if (highscoreList.length > 10) {
    highscoreList.pop();
  }

  saveHighscores();
}

export function saveHighscores() {
  localStorage.setItem('highscoreList', JSON.stringify(highscoreList));
}
