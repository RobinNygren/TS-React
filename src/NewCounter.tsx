// Lägg till ett inputfält där man ska kunna skriva en siffra och lägg till en knapp Add som lägger till   siffran till count. Hint: payload

import { useReducer, useRef } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  ADD10: "add10",
  HALVE: "halve",
  INPUT: "input",
};

type State = { count: number };
type Action = { type: string; payload?: number };

const newReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + action.payload! };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
    case ACTION.RESET:
      return { count: (state.count = 0) };
    case ACTION.ADD10:
      return { count: state.count + action.payload! };
    case ACTION.HALVE:
      return { count: Math.ceil(state.count / 2) };
    case ACTION.INPUT:
      return { count: state.count + Number(action.payload) };

    default:
      return state; // felhantering här, raise error
  }
};

const NewCounter = () => {
  const [state, dispatch] = useReducer(newReducer, { count: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() =>
          dispatch({
            type: ACTION.INPUT,
            payload: Number(inputRef.current?.value),
          })
        }
      >
        Input
      </button>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: ACTION.ADD, payload: 1 })}>
        Add
      </button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE })}>Remove</button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: ACTION.ADD10, payload: 10 })}>
        Add 10
      </button>
      <button onClick={() => dispatch({ type: ACTION.HALVE })}>Halve</button>
    </div>
  );
};
export default NewCounter;
