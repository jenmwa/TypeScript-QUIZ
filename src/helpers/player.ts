import { Player } from "../models/Player";

let currentPlayer: Player | null = null;

export function createNewPlayer(name: string): Player {
  const currentDate = new Date().toISOString();
  currentPlayer =  new Player(`${Date.now()}`, name, 0, '00:00:00', currentDate);
  return currentPlayer;
}

export function getCurrentPlayer(): Player | null {
  return currentPlayer;
}

// export function updatePlayer(name?: string, score?: number, time?: string): Player | null {
//   if (currentPlayer) {
//     if (name) currentPlayer.playerName = name;
//     if (score !== undefined) currentPlayer.quizPoints = score;
//     if (time) currentPlayer.time = time;
    
//     return currentPlayer;
//   }
//   return null;  // Om ingen spelare finns
// }
