import React from 'react'

const Box2 = ({rows,cols}) =>{
    let filled = {
        backgroundColor:black
    }
    let unfilled={
        backgroundColor:white
    }
    return (
        <div style={row%2===0?column%2===0?{filled}:{unfilled}:column%2===0?{unfilled}:{filled}>
            
        </div>
    )
}

export default Box2
