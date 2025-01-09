import { userContainer, playerPoints, endGameSection, startSection, newGameBtn, playerNameSpan } from "../main";


export function selectedRadioBtn(event: Event): void {
  const inputElement = event.target as HTMLInputElement;

  const selectedOption = inputElement.value;
  console.log('Vald option:', selectedOption);

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
