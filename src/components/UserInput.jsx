const UserInput = function ({ userInput, onInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            placeholder="Eg: 0-100000000"
            required
            value={userInput.initialInvestment}
            onChange={event => onInput('initialInvestment', event.target.value)}
            // minLength="1"
            // maxLength="10"
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            placeholder="Eg: 0-100000000"
            required
            value={userInput.annualInvestment}
            onChange={event => onInput('annualInvestment', event.target.value)}
            // minLength="1"
            // maxLength="10"
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            placeholder="Eg: 0-100000000"
            required
            value={userInput.expectedReturn}
            onChange={event => onInput('expectedReturn', event.target.value)}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            placeholder="Eg: 0-100000000"
            required
            value={userInput.duration}
            onChange={event => onInput('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
