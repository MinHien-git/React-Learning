import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./feature/counterSlice";
//selector là dùng để đọc (lấy)
//dispatch là dùng để ghi
function App() {
  return (
    <>
      <Button2 />
      <Button />
      <Counter2 /> <Counter />
    </>
  );
}

function Counter() {
  const count = useSelector((state) => state.counter.value);

  return <div>{count}</div>;
}

function Counter2() {
  const count = useSelector((state) => state.counter.value);

  return <div>{count}</div>;
}

function Button() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment())}>Increment</button>;
}

function Button2() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(decrement())}>decrement</button>;
}
export default App;
