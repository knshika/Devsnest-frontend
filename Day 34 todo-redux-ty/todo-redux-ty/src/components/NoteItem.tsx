import { FC } from "react";
import { useDispatch } from "react-redux";
import { delNote } from "../actions";

interface NotesProps {
  item:string,
  itemId:number

}

const NoteItem :FC<NotesProps>= ({ item, itemId }) => {
 
  const dispatch = useDispatch();
  return (
    <div>
      <span>{item} </span>
      <button onClick={() => dispatch(delNote(itemId))}>delete</button>
    </div>
 
)};

export default NoteItem
