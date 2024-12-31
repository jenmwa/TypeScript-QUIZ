import { IQuizQuestion } from '../models/IQuiz';

//Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Get 10 random questions
export function getRandomQuestions(questions: IQuizQuestion[], numQuestions: number): IQuizQuestion[] {
  const shuffledQuestions = shuffleArray([...questions]);
  return shuffledQuestions.slice(0, numQuestions);
}
