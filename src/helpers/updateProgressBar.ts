import { totalQuestions } from '../main';
import { currentQuestionIndex } from './nextQuestion';

export function updateProgressBar() {
  const progressBar: HTMLDivElement = document.querySelector('#progressBar')!;

  if (progressBar) {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
  }
}
