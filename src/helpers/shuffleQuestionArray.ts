import { IQuizQuestion } from '../models/IQuiz';

export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Byt plats på elementen
  }
  return array;
}

export function getRandomQuestions(questions: IQuizQuestion[], numQuestions: number): IQuizQuestion[] {
  const shuffledQuestions = shuffle([...questions]);
  return shuffledQuestions.slice(0, numQuestions);
}
