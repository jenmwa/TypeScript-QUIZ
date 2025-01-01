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
