import { observer } from "mobx-react-lite";
import React from "react";
import "./Counter.css";
import counter from "./store/counter";

export const Counter = observer(() => {
  return (
    <div className="counter">
      <h1>{counter.total}</h1>
      <div>
        <button onClick={() => counter.increment()}>+</button>
        <button onClick={() => counter.decrement()}>-</button>
      </div>
    </div>
  );
});
