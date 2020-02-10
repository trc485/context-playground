import React from "react";
import { useGlobalState } from "../contexts/global";

const Counter = () => {
  const [state, actions] = useGlobalState()
  const {incrementCount, decrementCount, updateUserName} = actions

  return (
    <div>
      <p>The count is: {state.count}</p>
      <p>username is: {state.user.name}</p>
      <button
        onClick={incrementCount}
      >Increment count
      </button>
      <button
        onClick={decrementCount}
      >Decrement count
      </button>
      <input
      type="text"
      value={state.user.name}
      onChange={e => updateUserName(e.currentTarget.value)}
      />
    </div>
  );
};

export default Counter