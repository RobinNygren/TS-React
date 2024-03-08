import { useReducer, useRef } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
  RESET: "reset",
  ADDXYZ: "addxyz",
  INPUT: "input",
};

type State = { count: string };
type Action = { type: string; payload: string };

const stringReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + String(action.payload) };
    case ACTION.RESET:
      return { count: (state.count = String(action.payload)) };
    case ACTION.ADDXYZ:
      return { count: state.count + String(action.payload) };
    case ACTION.INPUT:
      return { count: state.count + String(action.payload) };
    default:
      return state;
  }
};

const Stringer = () => {
  const [state, dispatch] = useReducer(stringReducer, { count: "" });
  const inputRef = useRef<HTMLInputElement>(null);
  if (inputRef.current) {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>Stringer</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() =>
          dispatch({
            type: ACTION.INPUT,
            payload: String(inputRef.current?.value),
          })
        }
      >
        Lägg till text
      </button>
      <button onClick={() => dispatch({ type: ACTION.ADD, payload: "R" })}>
        Lägg till
      </button>
      <button onClick={() => dispatch({ type: ACTION.RESET, payload: "" })}>
        Nollställ
      </button>
      <button onClick={() => dispatch({ type: ACTION.ADD, payload: "XYZ" })}>
        Lägg till XYZ
      </button>
      <p>{state.count}</p>
    </div>
  );
};

export default Stringer;
