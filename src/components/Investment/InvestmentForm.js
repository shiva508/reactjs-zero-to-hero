const InvestmentForm = ({ investmentInfo, inputChanageCapture }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
        </p>
        <p>
          <input
            type="number"
            required
            value={investmentInfo.initialInvestment}
            onChange={(event) =>
              inputChanageCapture("initialInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Anual Investment</label>
        </p>
        <p>
          <input
            type="number"
            required
            value={investmentInfo.annualInvestment}
            onChange={(event) =>
              inputChanageCapture("annualInvestment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
        </p>
        <p>
          <input
            type="number"
            required
            value={investmentInfo.expectedReturn}
            onChange={(event) =>
              inputChanageCapture("expectEdreturn", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Duriation</label>
        </p>
        <p>
          <input
            type="number"
            required
            value={investmentInfo.duration}
            onChange={(event) =>
              inputChanageCapture("duration", event.target.value)
            }
          ></input>
        </p>
      </div>
    </section>
  );
};
export default InvestmentForm;
