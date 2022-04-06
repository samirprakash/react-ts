import { useReducer } from 'react';

enum UseReducerTypes {
  'INCREMENT' = 'increment',
  'DECREMENT' = 'decrement',
  'RESET' = 'reset',
}

type UseReducerState = {
  count: number;
};

type UseReducerCounterAction = {
  type: UseReducerTypes.INCREMENT | UseReducerTypes.DECREMENT;
  payload: number;
};

type UseReducerResetAction = {
  type: UseReducerTypes.RESET;
};

type UseReducerAction = UseReducerCounterAction | UseReducerResetAction;

const initialState = { count: 0 };

function counterReducer(state: UseReducerState, action: UseReducerAction) {
  switch (action.type) {
    case UseReducerTypes.INCREMENT:
      return { count: state.count + action.payload };
    case UseReducerTypes.DECREMENT:
      return { count: state.count - action.payload };
    case UseReducerTypes.RESET:
      return initialState;
    default:
      return initialState;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      Count: {state.count}
      <button
        onClick={() =>
          dispatch({ type: UseReducerTypes.INCREMENT, payload: 10 })
        }
      >
        Increment 10
      </button>
      <button
        onClick={() =>
          dispatch({ type: UseReducerTypes.DECREMENT, payload: 10 })
        }
      >
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: UseReducerTypes.RESET })}>
        Reset
      </button>
    </>
  );
};

export default UseReducer;
