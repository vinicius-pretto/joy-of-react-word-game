import { checkGuess } from "../../../../../../game-helpers";

export function GuessResult({ guess, answer }) {
  const result = checkGuess(guess.value, answer);

  return (
    <p className="guess">
      {result.map((it, idx) => (
        <span key={idx} className={`cell ${it.status}`}>
          {it.letter}
        </span>
      ))}
    </p>
  );
}
