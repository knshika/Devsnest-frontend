import React, { useState } from "react";
import TrackerCard from "./TrackerCard";

function CaloriesTracker(props) {
  const [items, setItems] = useState([]);
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState("");

  const handleAddItem = () => {
    const item = {
      food: food,
      calories: calories,
    };

    const newItems = [...items, item];
    setItems(newItems);
  };

  return (
    <div className="container">
      <div className="input-group flex-nowrap mt-3">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Food Item"
          onChange={(e) => {
            setFood(e.target.value);
          }}
          value={food}
        />
        <input
          type="number"
          className="form-control ms-1"
          placeholder="Calories"
          onChange={(e) => {
            setCalories(e.target.value);
          }}
          value={calories}
        />
      </div>
      <div className="d-flex">
        <button
          type="button"
          className="btn btn-primary mt-3 m-auto "
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>
      <ul>
        {items.length === 0
          ? "Start adding items"
          : items.map((food, calories, index) => {
              <TrackerCard food={food} key={index} calories={calories} />;
            })}

        {/* <TrackerCard /> */}
      </ul>
    </div>
  );
}

export default CaloriesTracker;
