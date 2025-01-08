import { IQuizQuestion } from '../models/IQuiz';
import { selectedRadioBtn } from './classList';
import { createCodeBlock } from './createCodeBlock';
import { nextQuestion } from './nextQuestion';

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
  optionsHTML += '</div>';

  const userBtn = `
  <button class="button next-question-btn" id="nextQuestionBtn">NÄSTA FRÅGA</button>`;

  questionHTML += optionsHTML += userBtn;

  questionContainer!.innerHTML = questionHTML;

  const nextQuestionBtn: HTMLButtonElement = document.querySelector('#nextQuestionBtn')!;
  nextQuestionBtn.addEventListener('click', nextQuestion);

  const radioButtons = document.querySelectorAll('.answer-option');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', selectedRadioBtn);
  });
}
