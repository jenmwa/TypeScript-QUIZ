import { countPoints } from './countPoints';
import { endOfGame } from './endOfGame';
import { selectedQuestions } from './playGame';
import { renderQuestion } from './renderQuestionHTML';

export let currentQuestionIndex = 0;

export function resetCurrentQuestionIndex() {
  currentQuestionIndex = 0;
}

export function nextQuestion(): void {
  countPoints(selectedQuestions, currentQuestionIndex);

  currentQuestionIndex++;
  if (currentQuestionIndex < selectedQuestions.length) {
    renderQuestion(selectedQuestions, currentQuestionIndex);
  } else {
    endOfGame();
  }
}

