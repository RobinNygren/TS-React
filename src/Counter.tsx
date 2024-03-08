import { useState, useReducer } from "react";

const ACTION = {
  ADD: "add",
  REMOVE: "remove",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION.ADD:
      return { count: state.count + 1 };
    case ACTION.REMOVE:
      return { count: state.count - 1 };
  }
};

function Counter() {
  // const x = 12; ingen type declaration, utan infered type
  // const x: number = 12; med type declaration
  //const [newCount, setNewCount] = useState(0);
  //const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  /* const handleAddClick = () => dispatch(); */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    //setNewCount(Number(e.target.value));
  };
  /* const handleClickChange = () => {
    setCount(newCount);
  }; */

  return (
    <div>
      <input type="text" value={state.count} onChange={handleChange} />
      <button onClick={() => dispatch({ type: ACTION.ADD })}>Add</button>
      <button onClick={() => dispatch({ type: ACTION.REMOVE })}>Remove</button>
    </div>
  );
}

export default Counter;
