import { IQuizQuestion, questions } from './models/IInterface';
import './style.scss';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// const app = document.querySelector<HTMLDivElement>('#app');
// if (app) {
//   app.innerHTML = `
//    <main>
//     <h1>QUIZ ME</h1>
//     <div>question:</div>
//     <label>
//       <input type="radio" id="questionOne" name="question" value="questionOne">
//     </label>
//     <label>
//       <input type="radio" id="questionTwo" name="question" value="questionTwo">
//     </label>
//     <label for="javascript">
//       <input type="radio" id="questionThree" name="question" value="questionThree">
//     </label> 
//   </main>
//   `;

//   // EventListener for radio buttons
//   const radios = document.querySelectorAll<HTMLInputElement>('input[name="question"]');
//   radios.forEach(radio => {
//     radio.addEventListener('change', event => {
//       const selectedQuestion = (event.target as HTMLInputElement).value;
//       console.log(`question choosen: ${selectedQuestion}`);
//     });
//   });
// }

function createCodeBlock(code: string) {
  const preElement = document.createElement('pre');
  const codeElement = document.createElement('code');
  codeElement.textContent = code;
  preElement.appendChild(codeElement);
  return preElement;
}

function renderQuiz(questions: IQuizQuestion[]) {
  const quizContainer = document.getElementById('quiz-container');
  
  questions.forEach(question => {
    // Skapa en container för varje fråga
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question');
    
    // Fråga med template literals
    let questionHTML = `
      <p>${question.questionText}</p>
    `;
    
    // Om det finns en kodexempel, lägg till det
    if (question.codeExample) {
      const codeBlock = createCodeBlock(question.codeExample);
      questionHTML += codeBlock.outerHTML;  // Lägg till kodblocket i HTML-strängen
    }


    questionContainer.innerHTML = questionHTML;

    const answersContainer = document.createElement('div');
    
    [question.answer1, question.answer2, question.answer3].forEach((answer, index) => {
      // Skapa HTML för varje svar individuellt
      const answerHTML = `
        <div class="answer-container">
          <label for="answer-${index}">
            <input type="radio" id="answer-${index}" class="answer-option" name="question-${question.id}">
            ${answer.optionText}
          </label>
          <br>
        </div>
      `;
      
      // Lägg till varje svar till answersContainer
      answersContainer.innerHTML += answerHTML;
    });
    questionContainer.appendChild(answersContainer);

    quizContainer?.appendChild(questionContainer);
  });
}

renderQuiz(questions)
