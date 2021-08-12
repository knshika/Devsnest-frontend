import { useDispatch, useSelector } from "react-redux";
import { DecCounter, IncCounter ,ChangeCounter} from "./actions";
import './App.css';
import { reducerType } from "./reducers";



function App() {
  const counter = useSelector((state:reducerType) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={()=>{dispatch(IncCounter())}}>+</button>
      <button onClick={()=>{dispatch(ChangeCounter(10))}}>+10</button>

      <div>{counter}</div>
      <button onClick={()=>{dispatch(DecCounter())}}>-</button>
      <button onClick={()=>{dispatch(ChangeCounter(-10))}}>-10</button>


    </div>
  );
}

export default App;
