import { getCurrentPlayer } from "./player";



export function resetPlayer() {
  const player = getCurrentPlayer();
  if (player) {
    player.quizPoints = 0;  
  }
}
