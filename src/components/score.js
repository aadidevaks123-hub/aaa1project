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
          <div>YOU NEED TO GAIN {yrweights.weight}</div>
        )}
        {yrweights.type === "negative" && (
          <div>YOU NEED TO LOSS {yrweights.weight}</div>
        )}
        {yrweights.type === "normal" && (
          <div>Your BMI IS NORMAL {yrweights.weight}</div>
        )}
      </div>
    </div>
  );
}

export default Score;
