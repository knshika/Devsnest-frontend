export const IncCounter=()=>{
    return {
        type:"INC_COUNTER",
    }
}

export const DecCounter=()=>{
    return {
        type:"DEC_COUNTER",
    }
}

export const ChangeCounter=(num:number)=>{
    return{
        type:"CHANGE_COUNTER",
        payload:num
    }
}