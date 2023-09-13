import React, { useState } from "react";
import { sample, range } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [numGuesses, setNumGuesses] = useState(0);
  const [results, setResults] = useState(range(NUM_OF_GUESSES_ALLOWED));

  return (
    <>
      <GuessResults answer={answer} results={results} />
      <GuessInput
        answer={answer}
        results={results}
        numGuesses={numGuesses}
        setResults={setResults}
        setNumGuesses={setNumGuesses}
      />
      ;
    </>
  );
}

export default Game;
