import { range } from "../../../../../../utils";

export function EmptyResult() {
  const cols = range(5);

  return (
    <p className="guess">
      {cols.map((col) => (
        <span key={col} className="cell"></span>
      ))}
    </p>
  );
}
