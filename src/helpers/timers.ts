
import { IQuizQuestion } from "../models/IQuiz";
import { renderQuestion } from "./renderHTML";

export function startCountdown(selectedQuestions: IQuizQuestion[]) {
  const countdownElement = document.getElementById('countdown');
  let countdown = 3; 
  countdownElement!.textContent = countdown.toString();

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement!.textContent = countdown.toString();

    if (countdown === 0) {
      clearInterval(countdownInterval); 
      renderQuestion(selectedQuestions, 0); 
    }
  }, 1000);  
}
