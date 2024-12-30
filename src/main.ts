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

const newGameBtn = document.querySelector('#newGameBtn');
newGameBtn?.addEventListener('click', newGame);

function newGame() {
  console.log('lets play!');
}

const highscoreBtn = document.querySelector('#highscoreBtn');
highscoreBtn?.addEventListener('click', highscore);

const highscoreSection = document.querySelector('#highscoreSection'); 
const closeHighscoreBtn = document.querySelector('#closeHighscoreBtn');
closeHighscoreBtn?.addEventListener('click', closeHighscoreModule)

function closeHighscoreModule() {
  highscoreSection?.classList.add('hidden')
}

function highscore() {
  console.log('show highscore!');
  highscoreSection?.classList.remove('hidden')
  
}

const highscoreContainer = document.querySelector('#highscoreContainer');
if (highscoreContainer) {
  highscoreContainer.innerHTML = 'lets fill this list';
}

renderQuiz(questions);
