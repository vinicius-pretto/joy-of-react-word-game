export function LoseBanner({ answer }) {
  return (
    <div role="alert" className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}
