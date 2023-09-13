import React from "react";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

export const Banner = ({ guesses, answer }) => {
  return (
    <>
      {guesses.includes(answer) && <WonBanner numGuesses={guesses.length} />}
      {guesses.length >= NUM_OF_GUESSES_ALLOWED && (
        <LostBanner answer={answer} />
      )}
    </>
  );
};

export default Banner;
