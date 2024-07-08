import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const userInputHandler = function (inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue, // Square brackets allow you to use a variable or expression to dynamically access a property name within an object.
      };
    });
    console.log(userInput); // consoling it here displays the previous userInput value and not the updated value. Confirming that the state update is not instant in React.
  };

  return (
    <>
      <Header>React Investment Calculator</Header>
      <UserInput userInput onInput={userInputHandler}></UserInput>
    </>
  );
}

export default App;
