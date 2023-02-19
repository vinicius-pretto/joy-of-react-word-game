import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessResults } from "./components/GuessResults";
import { GuessInput } from "./components/GuessInput";
import { WinBanner } from "./components/WinBanner";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [guess, setGuess] = React.useState("");
  const [showWinBanner, setShowWinBanner] = React.useState(false);

  function onGuessInputChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function onSubmitGuess(event) {
    event.preventDefault();

    if (!guess) {
      return;
    }

    const guessResult = buildGuessResult(guess);
    setGuess("");
    setGuessResults((results) => results.concat(guessResult));

    if (isRightAnswer(guess, answer)) {
      setShowWinBanner(true);
    }
  }

  function isRightAnswer(guess, answer) {
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
      {showWinBanner && <WinBanner />}
      {showWinBanner ? null : (
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
