
import { startPage } from "./classList";
import { resetCurrentQuestionIndex } from "./nextQuestion";
import { resetPlayer } from "./resetPlayer";

import { resetTimer } from "./timers";

export function resetGame() {
  startPage();
  resetTimer();
  resetCurrentQuestionIndex();
  resetPlayer();
}

