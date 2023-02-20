import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessResults } from "./components/GuessResults";
import { GuessInput } from "./components/GuessInput";
import { WinBanner } from "./components/WinBanner";
import { LoseBanner } from "./components/LoseBanner";
import { checkGuess } from "../../game-helpers";
import { GAME_STATE, NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const [gameState, setGameState] = React.useState(GAME_STATE.PLAYING);

  function onGuessInputChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function onSubmitGuess(event) {
    event.preventDefault();

    if (!guess) {
      return;
    }

    const guessResult = buildGuessResult(guess);
    const nextGuessResults = [...guessResults, guessResult];
    setGuess("");
    setGuessResults(nextGuessResults);

    if (checkIfWin(guess, answer)) {
      setGameState(GAME_STATE.WIN);
      return;
    }

    if (checkIfLose(nextGuessResults)) {
      setGameState(GAME_STATE.LOSE);
      return;
    }
  }

  function checkIfLose(guessResults) {
    return guessResults.length >= NUM_OF_GUESSES_ALLOWED;
  }

  function checkIfWin(guess, answer) {
    const results = checkGuess(guess, answer);
    return results.every((result) => result.status === "correct");
  }

  function buildGuessResult(value) {
    return {
      id: crypto.randomUUID(),
      value,
    };
  }

  return (
    <>
      <GuessResults results={guessResults} answer={answer} />
      {gameState === GAME_STATE.WIN && <WinBanner />}
      {gameState === GAME_STATE.LOSE && <LoseBanner answer={answer} />}
      {gameState === GAME_STATE.PLAYING && (
        <GuessInput
          onSubmit={onSubmitGuess}
          onChange={onGuessInputChange}
          value={guess}
        />
      )}
    </>
  );
}

export default Game;
