export function GuessResult({ guess }) {
  const letters = guess.value.split("");

  return (
    <p className="guess">
      {letters.map((letter, idx) => (
        <span key={idx} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}
