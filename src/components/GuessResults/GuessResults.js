import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

export const GuessResults = ({ answer, guesses }) => {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p key={num} className="guess">
          <Guess answer={answer} guess={guesses[num]} />
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
