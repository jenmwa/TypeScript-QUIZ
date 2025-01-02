import { IQuizQuestion } from "../models/IQuiz";

let quizPoints = 0;

export function countPoints(selectedQuestions: IQuizQuestion[], questionIndex: number) {
  const question = selectedQuestions[questionIndex];

  const selectedAnswer: HTMLInputElement = document.querySelector(`input[name="question${question.id}"]:checked`)!;

  if (selectedAnswer) {
    const correctAnswer = [question.answer1, question.answer2, question.answer3].find(answer => answer.isCorrect);

    if (correctAnswer && selectedAnswer.value === correctAnswer.optionText) {
      quizPoints++;
    } else {
      quizPoints--;
    }
    console.log(`Poäng: ${quizPoints}`); 
  }
  
}
