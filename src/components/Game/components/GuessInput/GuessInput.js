import { GUESS_MAX_LENGTH } from "../../../../constants";

export function GuessInput({ onSubmit, onChange, value, disabled }) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={onChange}
        required
        disabled={disabled}
        minLength={GUESS_MAX_LENGTH}
        maxLength={GUESS_MAX_LENGTH}
      />
    </form>
  );
}
