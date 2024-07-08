const UserInput = function ({ input, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={event =>
              onChangeInput('initialInvestment', event.target.value)
            }
            // minLength="1"
            // maxLength="10"
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={event =>
              onChangeInput('annualInvestment', event.target.value)
            }
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
            required
            value={input.expectedReturn}
            onChange={event =>
              onChangeInput('expectedReturn', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={event => onChangeInput('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
