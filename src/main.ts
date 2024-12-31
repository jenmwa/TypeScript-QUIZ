import { createCodeBlock } from './helpers/createCodeBlock';
import { highscoreList } from './models/IHighscore';
import { IQuizQuestion, questions } from './models/IQuiz';
import './style.scss';

//*
//
//
// HTML-ELEMENTS
//
// *

const newGameBtn: HTMLButtonElement = document.querySelector('#newGameBtn')!;
const highscoreSection: HTMLElement = document.querySelector('#highscoreSection')!;
const closeHighscoreBtn: HTMLButtonElement = document.querySelector('#closeHighscoreBtn')!;
const gameSection: HTMLElement = document.querySelector('#gameSection')!;
const highscoreBtn: HTMLButtonElement = document.querySelector('#highscoreBtn')!;
const highscoreContainer: HTMLDivElement = document.querySelector('#highscoreContainer')!;
let playerName: string  = '';

//*
//
//
// Functions to-be-cleaned-up
//
// *


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



function newGame() {
  console.log('lets play!');
  if (gameSection) {
    gameSection.innerHTML = `
  <div>
    <label>
    <span>Namn:</span>
    <div class="error-div"></div>
      <input type="text" class="name-input" id="nameInput"></input>
    </label>
    <p class="small-text">spelregler</p>
    <button class="play-game-btn" id="playGameBtn" disabled >Starta spelet</button>
  </div>
  `;

    const nameInput: HTMLInputElement = document.querySelector('#nameInput')!;
    const playGameBtn: HTMLButtonElement = document.querySelector('#playGameBtn')!;

    if (nameInput && playGameBtn) {
      console.log('input element exists');
      nameInput.addEventListener('input', checkNameInput);
      playGameBtn.addEventListener('click', playGame);
    } else {
      console.error('nameInput or playGameBtn element not found');
    }

    if (newGameBtn) {
      newGameBtn.disabled = true;
    }
  }
}

function checkNameInput() {
  const nameInput = document.querySelector('#nameInput') as HTMLInputElement;
  const playGameBtn = document.querySelector('#playGameBtn') as HTMLButtonElement;

  if (nameInput && playGameBtn) {
    if (nameInput.value.length >= 3) {
      playGameBtn.disabled = false;
    } else {
      playGameBtn.disabled = true;
    }

    console.log('Input value has changed to:', nameInput.value);
    playerName = nameInput.value;
    
  } else {
    console.error('nameInput or playGameBtn element not found in checkNameInput');
  }
}

console.log('playername is:', playerName)

function playGame() {
  console.log('LETS PLAY');
  console.log('playername is:', playerName)
  //10 randomfrågor från vår lista
  // visa fråga 1
  //visa vart vi är 1/10
  //starta timer
}

function closeHighscoreModule() {
  highscoreSection?.classList.add('hidden');
}

function highscore() {
  console.log('show highscore!');
  highscoreSection?.classList.remove('hidden');
  renderHighscoreSection()
}

function renderHighscoreSection() {
  if (highscoreContainer) {
    highscoreContainer.innerHTML = 'lets fill this list';
    console.log('highscorelist is:', highscoreList);
  }
}


//*
//
//
// EVENTLISTENERS
//
// *

newGameBtn?.addEventListener('click', newGame);
highscoreBtn?.addEventListener('click', highscore);
closeHighscoreBtn?.addEventListener('click', closeHighscoreModule);



renderQuiz(questions);
