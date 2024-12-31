import { highscoreContainer } from "../main";
import { highscoreList } from "../models/IHighscore";
import { IQuizQuestion } from "../models/IQuiz";

export function renderQuestion(selectedQuestions: IQuizQuestion[], questionIndex: number) {
  console.log(selectedQuestions[questionIndex])
  const questionContainer = document.getElementById('question-container');
    const question = selectedQuestions[questionIndex];
  
    questionContainer!.innerHTML = `
      <h2>Fråga ${questionIndex + 1}</h2>
      <p>${question.questionText}</p>
     
      
    `;
  }

  export function renderHighscoreSection() {
    if (highscoreContainer) {
      highscoreContainer.innerHTML = 'lets fill this list';
      console.log('highscorelist is:', highscoreList);
    }
  }
