import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

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
        [inputIdentifier]: parseInt(newValue), // Square brackets allow you to use a variable or expression to dynamically access a property name within an object.
        // type casting the string value received from the event.target.value (by default provides a string) in the UserInput.jsx
      };
    });
    // console.log(userInput); // consoling it here displays the previous userInput value and not the updated value. Confirming that the state update is not instant in React.
  };

  return (
    <>
      <Header>React Investment Calculator</Header>
      <UserInput
        input={userInput} //input prop provided with the userInput object
        onChangeInput={userInputHandler}
      ></UserInput>
      <Results input={userInput}></Results>
    </>
  );
}

export default App;
