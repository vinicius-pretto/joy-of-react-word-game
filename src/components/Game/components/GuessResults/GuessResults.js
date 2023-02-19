import { NUM_OF_GUESSES_ALLOWED } from "../../../../constants";
import { range } from "../../../../utils";
import { GuessResult } from "./components/GuessResult";
import { EmptyResult } from "./components/EmptyResult";

export function GuessResults({ results, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((_, idx) =>
        results[idx]?.value ? (
          <GuessResult key={idx} guess={results[idx]} answer={answer} />
        ) : (
          <EmptyResult key={idx} />
        )
      )}
    </div>
  );
}
