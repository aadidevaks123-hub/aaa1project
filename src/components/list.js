import React from "react";

function List({rang,bmi}) {
  console.log(rang)
  return (
    <div>
      <div className="tables">
        <div className="box">
          TYPE
        
          <hr />
          <div className="border">
          UNDER WEIGHT
          </div>
         
          <hr />
          <div className="border">NORMAL</div>
          
         
          <hr />
          <div className="border">OVER WEIGHT</div>
          
          <hr />
          <div className="border">OBESITY CLASS 1</div>
          
          <hr />
         <div className="border"> OBESITY CLASS 2</div>
         
          <hr />
          <div className="border">OBESITY CLASS 3</div>
        </div>
        <hr />
        <div className="box">
          BMI
          
          <hr />
          <div className="border">less than 18.5</div>
          
          <hr />
          <div className="border">18.5-24.9</div>
          
          <hr />
          <div className="border">25-29.9</div>
                    <hr />
          <div className="border">30-34.9</div>
          
          <hr />
          <div className="border">35-39.9</div>
          
          <hr />
          <div className="border">>40</div>
        </div>
        <hr />
        <div className="box">WEIGHT
          
          <hr />
          <div className="border">{rang.underweight.low}kg</div>
          
          <hr />
          <div className="border">{rang.normal.low}kg-{rang.normal.high}kg</div>
          
          <hr />
          <div className="border">{rang.overweight.low}kg-{rang.overweight.high}kg</div>
          
          <hr />
          <div className="border">{rang.obsesity1.low}kg-{rang.obsesity1.high}kg</div>
          
          <hr />
          <div className="border">{rang.obsesity2.low}kg-{rang.obsesity2.high}kg</div>
          
          <hr />
          <div className="border">{rang.obsesity3.high}kg</div>
        </div>
      </div>
    </div>
  );
}

export default List;
