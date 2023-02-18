export function GuessInput({ onSubmit, onChange, value }) {
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={onChange}
        pattern="\w{5}"
      />
    </form>
  );
}
