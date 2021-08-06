import React from 'react'

function Form() {
    return (
    <div className="container">
         <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <input
                    type="text"
                    className="p-1 px-2 m-2"
                    
                    />
                <button className="btn btn-dark m-1" >
                    Search
                    </button>
             </div>
        </div>
    </div> 

    )
}

export default Form
