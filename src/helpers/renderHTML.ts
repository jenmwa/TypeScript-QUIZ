import { highscoreContainer } from '../main';
import { highscoreList } from '../models/IHighscore';
import { IQuizQuestion } from '../models/IQuiz';
import { selectedRadioBtn } from './classList';
import { createCodeBlock } from './createCodeBlock';

export function renderQuestion(selectedQuestions: IQuizQuestion[], questionIndex: number) {
  console.log(selectedQuestions[questionIndex]);
  const questionContainer = document.querySelector('#questionContainer');
  const question = selectedQuestions[questionIndex];

  let questionHTML = `
    <h2>Fråga ${questionIndex + 1}</h2>
    <p>${question.questionText}</p>
  `;

  if (question.codeExample) {
    const codeBlock = createCodeBlock(question.codeExample);
    questionHTML += codeBlock; 
  }

  let optionsHTML = '';
  optionsHTML += '<div class="answers-container">';
  [question.answer1, question.answer2, question.answer3].forEach(answer => {
    optionsHTML += `
      
        <label class="answer-option-label">
          <input type="radio" name="question${question.id}" class="answer-option" value="${answer.optionText}" />
          ${answer.optionText}
        </label>
     
    `;
  });

  const userBtn = `
  <button>NÄSTA FRÅGA</button>`;


  questionHTML += optionsHTML += userBtn;

  questionContainer!.innerHTML = questionHTML;

  const radioButtons = document.querySelectorAll('.answer-option');
  
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener('change', selectedRadioBtn);  
  });

}

export function renderHighscoreSection() {
  if (highscoreContainer) {
    highscoreContainer.innerHTML = 'lets fill this list';
    console.log('highscorelist is:', highscoreList);
  }
}
