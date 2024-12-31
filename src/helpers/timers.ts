import { playerName, playerNameSpan, timerDisplay } from '../main';
import { IQuizQuestion } from '../models/IQuiz';
import { renderQuestion } from './renderHTML';

let timerInterval: number | null = null;
let timeLeft = 0;

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

export function startTimer(): void {
  setTimeout(startCounting, 3000);
}

export function startCounting(): void {
  updateTimerDisplay();
  if (playerNameSpan) {
    playerNameSpan.innerHTML = playerName;
  }

  if (timerInterval !== null) {
    clearInterval(timerInterval);
  }

  timerInterval = setInterval(countUp, 1000);
}

export function countUp(): void {
  timeLeft++;
  updateTimerDisplay();
}

export function updateTimerDisplay(): void {
  const formattedTime = formatTime(timeLeft);
  // console.log(formattedTime);
  if (formattedTime) {
    timerDisplay.innerHTML = formattedTime;
  }
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
