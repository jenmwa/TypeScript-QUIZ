import { endGameSection, newGameBtn, playerNameSpan, playerPoints, startSection, userContainer } from "../main";
import { resetCurrentQuestionIndex } from "./nextQuestion";
import { resetTimer } from "./timers";




export function resetGame() {
  userContainer.classList.add('hidden');
  playerPoints.classList.add('hidden');
  endGameSection.classList.add('hidden');
  startSection.classList.remove('hidden');
  newGameBtn.disabled = false;
  playerPoints.innerHTML = '';
  playerNameSpan!.innerHTML = '';
  //nollställ timer 
  //ta bort timer HTML
  //nollställ poäng
  //ta bort poäng HTML
  //ta bort 
  //resetta objectet player
  resetTimer();
  resetCurrentQuestionIndex();


}

