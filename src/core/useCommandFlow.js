import { useState } from "react";
import CommandFlowEngine from "./CommandFlowEngine";

const useCommandFlow = () => {
  const [engine] = useState(new CommandFlowEngine());
  const [currentStep, setCurrentStep] = useState(engine.getCurrentStep());

  const nextStep = () => {
    engine.nextStep();
    setCurrentStep(engine.getCurrentStep());
  };

  const previousStep = () => {
    engine.previousStep();
    setCurrentStep(engine.getCurrentStep());
  };

  const reset = () => {
    engine.reset();
    setCurrentStep(engine.getCurrentStep());
  };

  return {
    currentStep,
    nextStep,
    previousStep,
    reset,
  };
};

export default useCommandFlow;
