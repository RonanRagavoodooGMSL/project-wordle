import React, { useState } from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import { GuessResults } from "../GuessResults/GuessResults";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput answer={answer} guesses={guesses} setGuesses={setGuesses} />
      <Banner guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
