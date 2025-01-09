import { IQuizQuestion } from '../models/IQuiz';
import { getCurrentPlayer } from './player';

export function countPoints(selectedQuestions: IQuizQuestion[], questionIndex: number) {
  const player = getCurrentPlayer();
  if (!player) {
    console.error('Ingen spelare är skapad.');
    return;
  }

  const question = selectedQuestions[questionIndex];
  const selectedAnswer: HTMLInputElement = document.querySelector(`input[name="question${question.id}"]:checked`)!;

  if (selectedAnswer) {
    const correctAnswer = [question.answer1, question.answer2, question.answer3].find(answer => answer.isCorrect);

    if (correctAnswer && selectedAnswer.value === correctAnswer.optionText) {
      if (player) player.quizPoints++;
    } else {
      if (player) player.quizPoints--;
    }
    console.log(`Poäng: ${player?.quizPoints}`);
  }
}
