import { useEffect, useState } from "react";
const Counter = () => {
  
  const [count, setCount] = useState(0);
  const[loading,setLoading]=useState(true);
  const display=false;
  const[multipliedValue,setMultipliedValue]=useState(1);

  const countButtonClick = () => {
    setCount(count + 1);
    setMultipliedValue(multipliedValue*2);
    console.log(count);
  }; 
  setTimeout(()=>{
    setLoading(false);
  },5000);

  return (
    <>
      <h1>HI</h1>
      <h2>SURYANSH SINGH</h2>
      <h3>This Button is clicked {count} times</h3>
      <h3>Multiplied Value:{multipliedValue}</h3>
      <button onClick={() => countButtonClick()}>This is a Button</button>
    </>
  );
};

export default Counter;