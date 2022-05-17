import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTION_TYPES =
  | { type: "decrement"; payload: number }
  | { type: "increment"; payload: number };

function counterReducer(state: typeof initialState, action: ACTION_TYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("bad action");
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <div>{state.counter}</div>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 10,
          })
        }
      >
        Increment
      </button>{" "}
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 5,
          })
        }
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducerComponent;
