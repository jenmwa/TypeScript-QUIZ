import { createCodeBlock } from "./createCodeBlock";
import { selectedQuestions } from "./playGame";

let showAnswersSection: HTMLElement | null = null;

export function showAnswers() {
  if (showAnswersSection) {
    showAnswersSection.classList.remove('hidden');
  } else {
    showAnswersSection = document.createElement('section');
    showAnswersSection.classList.add('answers-section');
    showAnswersSection.id = 'answersSection';

    let questionAnswersHTML = '';

    selectedQuestions.forEach((question, index) => {
      let codeBlock = '';
      if (question.codeExample) {
        codeBlock = createCodeBlock(question.codeExample); 
      }

      const correctAnswer = [question.answer1, question.answer2, question.answer3].find(answer => answer.isCorrect);

      questionAnswersHTML += `
        <div class="question-wrapper">
          <p>${index+1}. ${question.questionText}</p>
          ${codeBlock}
          <p>Rätt svar: <span class="bold">${correctAnswer?.optionText}</span></p>
        </div>`;
    });

    showAnswersSection.innerHTML = `
      <div class="answers-container">
        <div>
          <h2>Frågor och svar</h2>
          <p class="small-text">Rätt svar är markerat i fet-stil.</p>
          <span>Lägg märke till att ordningen av frågorna visas i slumpad ordning.</span>
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
