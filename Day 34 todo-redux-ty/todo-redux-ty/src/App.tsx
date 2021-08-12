import './App.css';
import AddNote from "./components/AddNote";
import NoteItem from "./components/NoteItem";
import { reducerType } from "./reducers";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state:reducerType) => state.noter);

  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <div> <AddNote /></div>
     <div>
      {todos.map((item:string, index:number) => (
        <NoteItem key={index} item={item} itemId={index} />
      ))}
      </div>
    </div>
  );
}

export default App;
