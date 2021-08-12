interface addNoteActionType{
    type:string;
    payload:string;
}

interface delNoteActionType{
    type:string;
    payload:number;
}

type ActionType = addNoteActionType|delNoteActionType;

const noteReducer =(state:any=[],action:ActionType)=>{
    switch(action.type){
       case "ADD_NOTE":
           return [...state,action.payload]
        case "DEL_NOTE":
            return state.filter((_:string,index:number)=>index !== action.payload);
           default:
            return state;
    }
}

   export default noteReducer;