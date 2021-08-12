interface ActionType{
    type:string;
    payload:number;
}

const counterReducers =(state=0,action:ActionType)=>{
    switch(action.type){
        case "INC_COUNTER":
            return state+1
            case "DEC_COUNTER":
            return state-1
            case "CHANGE_COUNTER":
            return state+action.payload 
           default:
            return state
    }
}

export default counterReducers;