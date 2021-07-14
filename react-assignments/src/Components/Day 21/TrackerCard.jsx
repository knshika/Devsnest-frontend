import React from "react";

function TrackerCard({ food, calories }) {
  return (
    <div className="d-flex">
      <div className="card w-75 p-0 m-auto mt-3 ">
        <div className="card-body">
          <h5 className="card-title">{food}</h5>
          <p className="card-text">You have consumed {calories} calories</p>
          <button type="button" class="btn btn-sm btn-outline-danger me-3">
            Delete
          </button>
          <button type="button" class="btn btn-sm btn-outline-success">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackerCard;
