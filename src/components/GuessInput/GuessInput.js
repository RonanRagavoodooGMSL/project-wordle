import React, { useState } from "react";

const GuessInput = ({ guesses, setGuesses }) => {
  const [inputGuess, setInputGuess] = useState("");

  const onChangeResult = (event) => {
    setInputGuess(event.target.value.toUpperCase().match(/^([A-Z]{0,5})/)[0]);
  };

  const handleGuess = () => {
    const nextGuesses = [...guesses, inputGuess];
    setGuesses(nextGuesses);
    setInputGuess("");
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess();
      }}
    >
      <label htmlFor="guess-input-wrapper">Enter guess: </label>

      <input
        id="guess-input"
        type="text"
        value={inputGuess}
        pattern="[A-Z]{5}"
        onChange={(event) => onChangeResult(event)}
      ></input>
    </form>
  );
};

export default GuessInput;
