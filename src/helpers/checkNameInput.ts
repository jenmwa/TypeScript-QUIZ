export let playerName: string = '';

export function checkNameInput() {
  const nameInput: HTMLInputElement = document.querySelector('#nameInput')!;
  const playGameBtn: HTMLButtonElement = document.querySelector('#playGameBtn')!;

  if (nameInput && playGameBtn) {
    if (nameInput.value.length >= 3) {
      playGameBtn.disabled = false;
    } else {
      playGameBtn.disabled = true;
    }

    console.log('Input value has changed to:', nameInput.value);
    playerName = nameInput.value;
  } else {
    console.error('nameInput or playGameBtn element not found in checkNameInput');
  }
}

console.log('playername is:', playerName);
