import { main, playerNameSpan, progressBarContainer, timerDisplay } from '../main';
import { IQuizQuestion } from '../models/IQuiz';
import { playerName } from './checkNameInput';
import { renderQuestion } from './renderQuestionHTML';

export let timerInterval: number | null = null;
export let timeLeft = 0;

export function startCountdown(selectedQuestions: IQuizQuestion[]) {
  progressBarContainer.classList.add('hidden');
  const countdownElement = document.querySelector('#countdown');
  let countdown = 3;
  countdownElement!.innerHTML = countdown.toString();

  const countdownInterval = setInterval(() => {
    countdown--;
    countdownElement!.textContent = countdown.toString();

    if (countdown === 0) {
      clearInterval(countdownInterval);
      
      if (countdownElement) {
        countdownElement.classList.add('hidden');
       main.classList.add('border')

      }

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

  timerInterval = setInterval(countUp, 1000);
}

export function countUp(): void {
  timeLeft++;
  updateTimerDisplay();
}

export function updateTimerDisplay(): void {
  const formattedTime = formatTime(timeLeft);
  if (formattedTime) {
    timerDisplay.innerHTML = formattedTime;
  }
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}


export function timeToSeconds(time: string): number {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timeLeft = 0;
  updateTimerDisplay();
}
