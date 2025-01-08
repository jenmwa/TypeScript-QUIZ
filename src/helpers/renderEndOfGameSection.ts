import { endGameSection } from "../main"
import { player } from "./playGame"


export function renderEndOfGameSection() {
  console.log('render: Congrats userName, you finished the quiz in xx:xx:xx and got xx points!')
  if(endGameSection) {
    endGameSection.innerHTML = `
     Congrats ${player?.playerName} , you finished the quiz in ${player?.time} and got ${player?.quizPoints} points! 🎉

     spela igen | visa highscore

     visa rätt svar?
    `
  }
}
