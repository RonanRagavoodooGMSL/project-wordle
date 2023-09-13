import React from "react";

export const WonBanner = ({ numGuesses }) => {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numGuesses} guesses</strong>.
      </p>
    </div>
  );
};

export default WonBanner;
