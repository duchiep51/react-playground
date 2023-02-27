import { useState } from "react";

const UpdatedComponent = (OriginalComponent, increaseCount) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(10);
    return (
      <OriginalComponent
        counter={counter}
        incrementCounter={() =>
          setCounter((counter) => counter + increaseCount)
        }
        name="Demo HOC"
        {...props}
      />
    );
  }

  return NewComponent;
};

export default UpdatedComponent;
