import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";

export default function CounterRedux() {
  {
    /* selects the data in counterReducer */
  }
  const { count } = useSelector((state: any) => state.counterReducer);
  {
    /* function dispatch */
  }
  const dispatch = useDispatch();

  {/* onClick calls function dispatch to increment or decrement */}
  return (
    <div id="wd-counter-redux">
      <h4>Counter Redux</h4>
      <h5>{count}</h5>
      <button
        onClick={() => dispatch(increment())}
        id="wd-counter-redux-increment-click"
      >
        {" "}
        Increment{" "}
      </button>
      <button
        onClick={() => dispatch(decrement())}
        id="wd-counter-redux-decrement-click"
      >
        {" "}
        Decrement{" "}
      </button>
      <hr />
    </div>
  );
}
