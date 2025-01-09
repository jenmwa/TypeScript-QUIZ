
import { createNewPlayer, getCurrentPlayer } from "./player";
import { resetCurrentQuestionIndex } from "./nextQuestion";
import { resetPlayer } from "./resetPlayer";
import { resetTimer } from "./timers"


export function playAgain() {
  const player = getCurrentPlayer();
  console.log('same player play again')
  console.log(player?.playerName)

  resetCurrentQuestionIndex();
  resetTimer();
  resetPlayer();
  if(player) {
    createNewPlayer(player.playerName)
  }


}
