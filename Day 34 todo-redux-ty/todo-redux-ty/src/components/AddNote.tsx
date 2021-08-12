import { useState } from "react";
import { useDispatch} from "react-redux";
import { addNote } from "../actions";


const AddNote = () => {
  const [item, setItem] = useState<string>("");
 
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="add your note..."
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button
        onClick={() => {
          if(item===""){
            return;
          }
          setItem("");
          dispatch(addNote(item));
        }}
      >
        Add
      </button>
    </div>
  );
};
export default AddNote;
