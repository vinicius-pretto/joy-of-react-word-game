import { range } from "../../../../../../utils";
import { GUESS_MAX_LENGTH } from "../../../../../../constants";

export function EmptyResult() {
  const cols = range(GUESS_MAX_LENGTH);

  return (
    <p className="guess">
      {cols.map((col) => (
        <span key={col} className="cell"></span>
      ))}
    </p>
  );
}
