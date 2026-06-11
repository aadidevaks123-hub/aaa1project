import React, { useState } from "react";
function Score({bmiNo,type}) {

  return (
    <div>
      <div className="scores">
        <h2>BMI SCORE</h2>
        <br/>
        <br/>
        Your BMI Score Is : 
        <div className="score">{bmiNo}
        </div>
        <h2>{type}</h2>
        
      </div>
    </div>
  );
}

export default Score;
