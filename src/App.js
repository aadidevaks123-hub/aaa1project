import React, { useState } from "react";
import "./App.css";
import Form from "./components/form";
import Score from "./components/score";
import List from "./components/list";


function App() {
  const [bmi, setbmi] = useState(0);
  const [bmitype, setbmitype] = useState("");
  const [show, setshow] = useState(false)
  const [range, setrange] = useState({
    underweight:{low:""},
    normal:{low:"",high:""},
    overweight:{low:"",high:""},
    obsesity1:{low:"",high:""},
    obsesity2:{low:"",high:""},
    obsesity3:{low:"",high:""},
  });
  const calranges=(b,h)=>{
    return (b*h*h).toFixed(2);
  };
  const weightrange=(bmi)=>{
    if(bmi<18.5){
      return "UnderWeight"
    }
    else if(18.6<=bmi&&bmi<20){
      return "Normal";
    }
    else if(bmi>=20&&bmi<24.9){
      return "OverWeight";
    }
     else if(bmi>=30&&bmi<34.9){
      return "Obesity Class 1";
    }
     else if(bmi>=35&&bmi<39.9){
      return "Obesity Class 2";
    }
     else if(bmi>=40){
      return "Obesity Class 3";
    }
    
  }
  const data = (w, h) => {
    console.log(w, h);
    let b = calculatate(w, h);
    setbmi(b);
    const range={underweight:{low:calranges(18.5,h)},
    normal:{low:calranges(18.6,h),high:calranges(24.9,h)},
    overweight:{low:calranges(25,h),high:calranges(29.9,h)},
    obsesity1:{low:calranges(30,h),high:calranges(34.9,h)},
    obsesity2:{low:calranges(35,h),high:calranges(39.9,h)},
    obsesity3:{high:calranges(40,h)}}
    let t=weightrange(b);
    setbmitype(t);
    setrange(range);
    setshow(true);
  };
  const calculatate = (w, h) => {
    return (w / (h * h)).toFixed(2);
  };
  
  const refresh =()=>{
    setbmi("")
    setbmitype("");
    data("","");
  }
  // const yrweight=(bmi)=>{
  //   let getweight;
  //    if(bmi<18.5){
  //     {range.normal.low}-w}
  //   }
  //   else if(40<=bmi){
  //     {w-{range.normal.high}};
  //   }
  //   else if(bmi>=18.6&&bmi<20){
  //     return "your weight is normal"
  //   }
  // }

  return (
    <div>
      <div className="title">BMI CALCULATOR</div>
      <Form getdata={data} refreshs={refresh} showr={show}/>
      {show&&<div className="scorelist">
      <Score bmiNo={bmi} type={bmitype} ran={range} />
      <List rang={range} bmi={bmi}/>
      <button className="btn2" onClick={refresh}>Refresh</button>
      </div>}
    </div>
  );
}


export default App;