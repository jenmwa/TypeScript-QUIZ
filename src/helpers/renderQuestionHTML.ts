import { playerPoints, questionOverview, totalQuestions } from '../main';
import { IQuizQuestion } from '../models/IQuiz';
import { questionPage, selectedRadioBtn } from './classList';
import { createCodeBlock } from './createCodeBlock';
import { getCurrentPlayer } from './player';
import { nextQuestion } from './nextQuestion';
import { shuffle } from './shuffleQuestionArray';

export function renderQuestion(selectedQuestions: IQuizQuestion[], questionIndex: number) {
  questionPage();
  const player = getCurrentPlayer();
  questionOverview.innerHTML = `Fråga ${questionIndex + 1} av ${totalQuestions}`;
  playerPoints.innerHTML = `Poäng: ${player?.quizPoints}`;
  const questionContainer = document.querySelector('#questionContainer');
  const question = selectedQuestions[questionIndex];

  let questionHTML = `
  <div>
    <h2>Fråga ${questionIndex + 1}</h2>
    <p>${question.questionText}</p>

  `;

  if (question.codeExample) {
    const codeBlock = createCodeBlock(question.codeExample);
    questionHTML += codeBlock;
  }

  const options = [question.answer1.optionText, question.answer2.optionText, question.answer3.optionText];
  const shuffledOptions = shuffle(options);

  let optionsHTML = '';
  optionsHTML += '<div class="answers-container">';
  shuffledOptions.forEach(answer => {
    optionsHTML += `
      <label class="answer-option-label">
        <input type="radio" name="question${question.id}" class="answer-option" value="${answer}" />
        ${answer}
      </label>
    `;
  });
  optionsHTML += '</div>     </div>';

  const userBtn = `
    <div class="next-button-container">
      <button class="button next-question-btn" id="nextQuestionBtn">NÄSTA FRÅGA</button>
    </div>
  `;

  questionHTML += optionsHTML += userBtn;

  questionContainer!.innerHTML = questionHTML;

  const nextQuestionBtn: HTMLButtonElement = document.querySelector('#nextQuestionBtn')!;
  nextQuestionBtn.addEventListener('click', nextQuestion);

  const radioButtons = document.querySelectorAll('.answer-option');

  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('change', selectedRadioBtn);
  });
}
