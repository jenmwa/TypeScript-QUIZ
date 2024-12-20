import { createCodeBlock } from './helpers/createCodeBlock';
import { IQuizQuestion, questions } from './models/IQuiz';
import './style.scss';

function renderQuiz(questions: IQuizQuestion[]) {
  const quizContainer = document.getElementById('quiz-container');

  questions.forEach(question => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question');

    let questionHTML = `
      <p>${question.questionText}</p>
    `;

    if (question.codeExample) {
      const codeBlock = createCodeBlock(question.codeExample);
      questionHTML += codeBlock.outerHTML;
    }

    questionContainer.innerHTML = questionHTML;

    const answersContainer = document.createElement('div');

    [question.answer1, question.answer2, question.answer3].forEach((answer, index) => {
      const answerHTML = `
        <div class="answer-container">
          <label for="answer-${index}">
            <input type="radio" id="answer-${index}" class="answer-option" name="question-${question.id}">
            ${answer.optionText}
          </label>
          <br>
        </div>
      `;

      answersContainer.innerHTML += answerHTML;
    });
    questionContainer.appendChild(answersContainer);

    quizContainer?.appendChild(questionContainer);
  });
}

renderQuiz(questions);
