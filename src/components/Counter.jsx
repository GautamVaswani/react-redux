import "./counter.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/action-creators";

export default function CounterComponent(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      Counter: {counter}
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
