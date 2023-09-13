import Guess from "../Guess";

export const GuessResults = ({ answer, results }) => {
  return (
    <div className="guess-results">
      {results.map((result) => (
        <Guess key={Math.random()} answer={answer} result={result} />
      ))}
    </div>
  );
};

export default GuessResults;
