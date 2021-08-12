export const addNote=(note:string)=>{
    return {
        type:"ADD_NOTE",
        payload:note
    }
}

export const delNote=(id:number)=>{
    return {
        type:"DEL_NOTE",
        payload:id
    }
}

