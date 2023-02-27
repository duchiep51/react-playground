import { useState } from "react";
import withCounter from "../../hocs/withCounter";

function ClickIncrease(props) {
  const { counter, incrementCounter } = props; //set initial value of Hook to 10.
  return (
    <div>
      {/*When clicked, increment the value of fontSize*/}
      <button onClick={incrementCounter}>Increase with click</button>
      {/*Set the font size of this text to the fontSize variable.*/}
      {/*Furthermore, display its value as well.*/}
      <p style={{ counter }}>Size of font in onClick function: {counter}</p>
      <p> Value of 'name' in HoverIncrease: {props.name}</p>
    </div>
  );
}
export default withCounter(ClickIncrease, 1);
