export interface IAnswerOption {
  optionText: string;
  isCorrect: boolean;
}

export interface IQuizQuestion {
  id: number;
  questionText: string;
  codeExample?: string;
  answer1: IAnswerOption;
  answer2: IAnswerOption;
  answer3: IAnswerOption;
}
