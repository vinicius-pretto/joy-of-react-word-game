import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessResults } from "./components/GuessResults";
import { GuessInput } from "./components/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  function onGuessInputChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function onSubmitGuess(event) {
    event.preventDefault();

    if (!guess) {
      return;
    }
    console.log({ guess });
    const guessResult = buildGuessResult(guess);
    setGuess("");
    setGuessResults((results) => results.concat(guessResult));
  }

  function buildGuessResult(value) {
    return {
      id: crypto.randomUUID(),
      value,
    };
  }

  return (
    <main>
      <GuessResults results={guessResults} />
      <GuessInput
        onSubmit={onSubmitGuess}
        onChange={onGuessInputChange}
        value={guess}
      />
    </main>
  );
}

export default Game;
