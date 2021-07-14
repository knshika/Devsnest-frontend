import React, { useState } from "react";

function TrackerCard({ food, calories, index, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="d-flex ">
      <div className="card w-75 p-0 m-auto mt-3 ">
        <div className="card-body">
          {isEditing === true ? (
            <input
              type="text"
              className="form-control me-2 mb-1"
              placeholder="Food Item"
              onChange={(e) => {
                update({ food: e.target.value }, index);
              }}
              value={food}
            />
          ) : (
            <h5 className="card-title">{food}</h5>
          )}
          {isEditing === true ? (
            <input
              type="number"
              className="form-control me-2 mb-1"
              placeholder="Calories"
              value={calories}
              onChange={(e) => {
                update({ calories: e.target.value }, index);
              }}
            />
          ) : (
            <p className="card-text">You have consumed {calories} calories</p>
          )}

          <button
            type="button"
            className="btn btn-sm btn-outline-danger me-3"
            onClick={() => remove(index)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-success"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Done" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackerCard;
