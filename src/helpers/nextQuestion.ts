import { countPoints } from './countPoints';
import { endOfGame } from './endOfGame';
import { selectedQuestions } from './playGame';
import { renderQuestion } from './renderQuestionHTML';
import { updateProgressBar } from './updateProgressBar';

export let currentQuestionIndex = 0;

export function resetCurrentQuestionIndex() {
  currentQuestionIndex = 0;
}

export function nextQuestion(): void {
  countPoints(selectedQuestions, currentQuestionIndex);
  currentQuestionIndex++;
  updateProgressBar();

  if (currentQuestionIndex < selectedQuestions.length) {
    renderQuestion(selectedQuestions, currentQuestionIndex);
  } else {
    endOfGame();
  }
}
