import {
  userContainer,
  playerPoints,
  endGameSection,
  startSection,
  newGameBtn,
  playerNameSpan,
  gameSection,
  overviewContainer,
  progressBarContainer,

} from '../main';

export function selectedRadioBtn(event: Event): void {
  const inputElement = event.target as HTMLInputElement;

  document.querySelectorAll('.answer-option-label').forEach(answer => {
    answer.classList.remove('choosen');
  });

  const selectedAnswer = inputElement.closest('.answer-option-label');
  selectedAnswer?.classList.add('choosen');
}

export function startPage() {
  userContainer.classList.add('hidden');
  playerPoints.classList.add('hidden');
  endGameSection.classList.add('hidden');
  startSection.classList.remove('hidden');
  newGameBtn.disabled = false;
  playerPoints.innerHTML = '';
  playerNameSpan.innerHTML = '';
}

export function playAgainPage() {

  endGameSection.classList.add('hidden');
  gameSection.classList.remove('hidden');
  userContainer.classList.add('hidden');

  playerPoints.innerHTML = '';
}

export function questionPage() {
  userContainer.classList.remove('hidden');
  playerPoints.classList.remove('hidden');
  overviewContainer.classList.remove('hidden');
  progressBarContainer.classList.remove('hidden');
  const questionContainer = document.querySelector('#questionContainer')!;
  questionContainer.classList.remove('hidden');

}
