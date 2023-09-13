import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

const GuessInput = ({
  answer,
  results,
  numGuesses,
  setResults,
  setNumGuesses,
}) => {
  const [response, setResponse] = useState("");
  const [done, setDone] = useState(0);

  function onChangeResult(e) {
    setResponse(e.target.value.toUpperCase().match(/^([A-Z]{0,5})/)[0]);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (response.length < 5) {
          window.alert("Use 5 letters");
          return;
        } else if (response === answer) {
          setDone(1);
        } else if (numGuesses === NUM_OF_GUESSES_ALLOWED - 1) {
          setDone(2);
        }

        const newResults = [...results];
        newResults[numGuesses] = response;
        setNumGuesses(numGuesses + 1);
        setResults(newResults);
        setResponse("");
      }}
    >
      <label htmlFor="guess-input-wrapper">Enter guess: </label>

      <input
        id="guess-input"
        type="text"
        value={response}
        onChange={(event) => onChangeResult(event)}
        disabled={done !== 0}
      ></input>
      {done === 1 && <WonBanner numGuesses={numGuesses} />}
      {done === 2 && <LostBanner answer={answer} />}
    </form>
  );
};

export default GuessInput;
