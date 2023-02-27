import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
}

function BuggyCounter() {
  const [state, setState] = useState({ counter: 0 });

  const handleClick = () => {
    setState(({ counter }) => ({ counter: ++counter }));
  };

  if (state.counter === 5) throw new Error("I crashed!");

  return <h1 onClick={handleClick}>{state.counter}</h1>;
}

function SimulateBugWithLib() {
  return (
    <div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br />
          <br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a
          JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          console.log("reset");
        }}
        onError={(e) => console.log("error: ", e)}
      >
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
      <hr />
      <p>
        These two counters are each inside of their own error boundary. So if
        one crashes, the other is not affected.
      </p>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default SimulateBugWithLib;
