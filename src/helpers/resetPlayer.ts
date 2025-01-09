import { getCurrentPlayer } from "./createPlayer";



export function resetPlayer() {
  const player = getCurrentPlayer();
  if (player) {
    player.quizPoints = 0;  
  }
}
