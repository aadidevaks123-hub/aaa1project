import React, { useState } from "react";

function Form({ getdata, shows }) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert1, setalert1] = useState(false);
  const [alert2, setalert2] = useState(false);
  const [alert3, setalert3] = useState(false);
  const alerts1 = () => {
    return <div className="alerts">Please enter a valid input!!!</div>;
  };
  const alerts2 = () => {
    return <div className="alerts">Enter The Weight </div>;
  };
  const alerts3 = () => {
    return <div className="alerts">Enter The Height</div>;
  };
  const submit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      setalert1("true");
      setalert2(false);
      setalert3(false);
      shows();
      setweight("");
      setheight("");
    } else if (weight === "") {
      setalert2(true);
      setalert3(false);
      setalert1(false);
      shows();
    } else if (height === "") {
      setalert3(true);
      setalert1(false);
      setalert2(false);
      shows();
    } else {
      setalert1(false);
      setalert2(false);
      setalert3(false);
      getdata(weight, height);
      setweight("");
      setheight("");
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
            <label className="label">Height(m)</label>
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

          {alert1 && alerts1()}
          {alert2 && alerts2()}
          {alert3 && alerts3()}
        </div>
      </div>
    </div>
  );
}

export default Form;
