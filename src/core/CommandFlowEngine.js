class CommandFlowEngine {
  constructor() {
    this.steps = [];
    this.currentStep = 0;
  }

  addStep(step) {
    this.steps.push(step);
  }

  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  getCurrentStep() {
    return this.steps[this.currentStep];
  }

  reset() {
    this.currentStep = 0;
  }
}

export default CommandFlowEngine;
