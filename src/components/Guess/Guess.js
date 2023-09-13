import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

const Cell = ({ letter, stat }) => {
  const className = stat ? `cell ${stat}` : "cell";
  return <span className={className}>{letter}</span>;
};

export const Guess = ({ answer, guess }) => {
  const check = checkGuess(guess, answer);
  return range(5).map((num) => (
    <Cell
      key={num}
      letter={check ? check[num].letter : undefined}
      stat={check ? check[num].status : undefined}
    />
  ));
};

export default Guess;
