import React, { useState } from "react";

function Form({ getdata,shows}) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setalert] = useState(false);
  const alerts = () => {
    return <div className="alerts">Please enter a valid input!!!</div>;
  };
  const submit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)||height===""||weight==="") {
      setalert("true");
      shows()
    } else {
      setalert(false);
      getdata(weight, height);
      // setweight("");
      // setheight("");
    }
  };
  return (
    <div>
      <div>
        <div className="forms">
          <form>
            <label className="label">Weight(kg)</label>
            <br />
            <input
              className="input"
              type="integer"
              value={weight}
              onChange={(evt) => setweight(evt.target.value)}
              required
            />
            <br />
            <label className="label">Height(cm)</label>
            <br />
            <input
              className="input"
              type="integer"
              value={height}
              onChange={(evt) => setheight(evt.target.value)}
              required
            />
            <br />
            <br />
            <button className="button" onClick={submit}>
              GET BMI
            </button>
          </form>

          {alert && alerts()}
        </div>
      </div>
    </div>
  );
}

export default Form;
