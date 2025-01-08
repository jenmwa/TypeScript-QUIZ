import { countPoints } from './countPoints';
import { endOfGame } from './endOfGame';
import { selectedQuestions } from './playGame';
import { renderQuestion } from './renderQuestionHTML';

export let currentQuestionIndex = 0;

export function nextQuestion(): void {
  console.log('Next question');

  countPoints(selectedQuestions, currentQuestionIndex);

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    renderQuestion(selectedQuestions, currentQuestionIndex);
  } else {
    console.log('Game Over! No more questions.');
    endOfGame();
  }
}
