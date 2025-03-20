import React from "react";
import CommandLine from "react-command-flow/src/components/CommandLine";

const commands = {
  greet: {
    description: "Greets the user",
    steps: [{ prompt: "What is your name?", field: "name" }],
    onComplete: (data) => `Hi, ${data.name}!`,
  },
  register: {
    description: "User registration flow",
    steps: [
      { prompt: "Name?", field: "name" },
      { prompt: "Email?", field: "email" },
      { prompt: "Age?", field: "age" },
    ],
    onComplete: (data) =>
      `Welcome ${data.name}, Email: ${data.email}, Age: ${data.age}`,
  },
};

const App = () => (
  <div style={{ padding: "2rem" }}>
    <h1>React Command Flow Demo</h1>
    <CommandLine commands={commands} />
  </div>
);

export default App;
