import { useState } from "react";
const Counter = () => {
  
  const [count, setCount] = useState(0);
  const[multipliedValue,setMultipliedValue]=useState(1);

  const countButtonClick = () => {
    setCount(count + 1);
    setMultipliedValue(multipliedValue*2);
    console.log(count);
  };

  return (
    <>
      <h1>HI</h1>
      <h2>SURYANSH SINGH</h2>
      <h3>This Button is clicked{count}times</h3>
      <h3>Multiplied Value:{multipliedValue}</h3>
      <button onClick={() => countButtonClick()}>This is a Button</button>
      <Counter
      buttonLabel1="This is from Parent"
      color="green"
      count={count}
      countButtonClick={countButtonClick}


    />
    </>
  );
};

export default Counter;