import React from "react";
import { checkGuess } from "../../game-helpers";

export const Guess = ({ answer, result }) => {
  if (result.length < 5) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  } else {
    const check = checkGuess(result, answer);
    return (
      <p className="guess">
        <span className={`cell ${check[0].status}`}>{result.charAt(0)}</span>
        <span className={`cell ${check[1].status}`}>{result.charAt(1)}</span>
        <span className={`cell ${check[2].status}`}>{result.charAt(2)}</span>
        <span className={`cell ${check[3].status}`}>{result.charAt(3)}</span>
        <span className={`cell ${check[4].status}`}>{result.charAt(4)}</span>
      </p>
    );
  }
};

export default Guess;
