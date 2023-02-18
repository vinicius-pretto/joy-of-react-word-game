import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GuessInput } from "./components/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
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
    setGuess("");
  }

  return (
    <main>
      <GuessInput
        onSubmit={onSubmitGuess}
        onChange={onGuessInputChange}
        value={guess}
      />
    </main>
  );
}

export default Game;
