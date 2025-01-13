import { questions } from "../models/IQuiz";
import { createCodeBlock } from "./createCodeBlock";

let showAnswersSection: HTMLElement | null = null;

export function showAnswers() {
  if (showAnswersSection) {
    showAnswersSection.classList.remove('hidden');
  } else {
    showAnswersSection = document.createElement('section');
    showAnswersSection.classList.add('answers-section');
    showAnswersSection.id = 'answersSection';

    let questionAnswersHTML = ''; // Starta med en tom sträng

    questions.forEach((question) => {
      let codeBlock = '';
      if (question.codeExample) {
        codeBlock = createCodeBlock(question.codeExample); 
      }

      const correctAnswer = [question.answer1, question.answer2, question.answer3].find(answer => answer.isCorrect);

      // Bygg upp HTML-strängen för varje fråga och svar
      questionAnswersHTML += `
        <div class="question-wrapper">
          <p>${question.id}. ${question.questionText}</p>
          ${codeBlock}
          <p>Rätt svar: <span class="bold">${correctAnswer?.optionText}</span></p>
        </div>`;
    });

    // Sätt ihop den kompletta innerHTML för answers-section
    showAnswersSection.innerHTML = `
      <div class="answers-container">
        <div>
          <h2>Frågor och svar</h2>
          <p class="small-text">Rätt svar är markerat i fet-stil.</p>
          <span>Lägg märke till att ordningen svarsalternativen i quizzet visas i slumpas fram.</span>
        </div>
        ${questionAnswersHTML}
        <div class="button-container">
          <button class="button" id="closeAnswerBtn"> Stäng </button>
        </div>
      </div>
    `;

    const mainElement = document.querySelector('main'); 
    if (mainElement) {
      mainElement.appendChild(showAnswersSection);
    }

    const closeAnswerBtn: HTMLButtonElement | null = document.querySelector('#closeAnswerBtn');
    if (closeAnswerBtn) {
      closeAnswerBtn.addEventListener('click', closeAnswers);
    }
  } 
}

function closeAnswers() {
  console.log('click to close');
  if (showAnswersSection) {
    showAnswersSection.classList.add('hidden');
  }
}
