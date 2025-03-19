import React from "react";
import useCommandFlow from "../core/useCommandFlow";

const CommandLine = () => {
  const { currentStep, nextStep, previousStep, reset } = useCommandFlow();

  return (
    <div className="command-line">
      <div className="command-output">{currentStep}</div>
      <div className="command-input">
        <button onClick={previousStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CommandLine;
