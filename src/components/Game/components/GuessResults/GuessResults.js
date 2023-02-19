export function GuessResults({ results }) {
  if (results?.length <= 0) {
    return;
  }
  return (
    <div className="guess-results">
      {results.map(({ id, value }) => (
        <p key={id} className="guess">
          {value}
        </p>
      ))}
    </div>
  );
}
