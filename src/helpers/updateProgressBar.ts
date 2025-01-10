import { currentQuestionIndex } from './nextQuestion';
import { totalQuestions } from './playAgain';

export function updateProgressBar() {
  const progressBar: HTMLDivElement = document.querySelector('#progressBar')!;

  if (progressBar) {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
  }
}

export function resetProgressBar() {
  const progressBar: HTMLDivElement = document.querySelector('#progressBar')!;

  if (progressBar) {
    progressBar.style.width = '0%';
  }
}
