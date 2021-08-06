export const updatePlace=(place)=>{
    return {
        type:"UPDATE_PLACE",
        payload:place,
    }
}

export const updatePlaceData=(place)=>{
    return {
        type:"UPDATE_PLACE_DATA",
        payload:place,
    }
}