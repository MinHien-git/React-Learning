import "./index.scss";
import { useState } from "react";
//use State,useEffect => [], không có ngoặc vuông, [state,props], useEffect return () => {}
//useRef , useContext => dom, k reset lại trang

export default function HomePage() {
  const [state, setState] = useState(1);
  return (
    <div>
      <Button handleChange={() => setState(state + 1)}></Button>
      <Counter state={state}></Counter>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export function Button({ handleChange }) {
  return <button onClick={handleChange}>Click me</button>;
}

// eslint-disable-next-line react/prop-types
export function Counter({ state }) {
  return <div>{state}</div>;
}
