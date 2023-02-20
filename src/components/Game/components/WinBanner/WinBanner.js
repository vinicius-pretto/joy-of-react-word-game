export function WinBanner({ numOfGuesses }) {
  return (
    <div role="alert" className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfGuesses} guesses</strong>.
      </p>
    </div>
  );
}
