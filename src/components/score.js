function Score({ bmiNo, type, yrweights }) {
  console.log(yrweights);

  return (
    <div>
      <div className="scores">
        <h2>BMI SCORE</h2>
        <br />
        <br />
        Your BMI Score Is :<div className="score">{bmiNo}</div>
        <h2>{type}</h2>
        {yrweights.type === "positive" && (
          <div className="gain">YOU NEED TO GAIN {yrweights.weight}kg</div>
        )}
        {yrweights.type === "negative" && (
          <div className="loss">YOU NEED TO LOSS {yrweights.weight}kg</div>
        )}
        {yrweights.type === "normal" && (
          <div className="good">GOOD,Your BMI IS NORMAL </div>
        )}
      </div>
    </div>
  );
}

export default Score;
