import { useState } from "react";
import withCounter from "../../hocs/withCounter";

function HoverIncrease(props) {
    const { counter, incrementCounter } = props; 
  return (
    <div>
      {/*This time, instead of listening to clicks,*/}
      {/*Listen to hover events instead*/}
      <button onMouseOver={incrementCounter}>
        Increase on hover
      </button>
      <p style={{ counter }}>
        Size of font in onMouseOver function: {counter}
      </p>
      <p> Value of 'name' in HoverIncrease: {props.name}</p>
    </div>
  );
}

export default withCounter(HoverIncrease, 2);
