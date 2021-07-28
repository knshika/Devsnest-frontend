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
    // if when setting a key on object name of
    // variable and key is same, we can just set name of key
    // i.e., { food: food } and { food } is the name
    // in 2nd it will find a variable named food and set it's
    // value to food key

    const newItems = [...items, item];
    setItems(newItems);
  };

  //spread operator concept clear
  const updateCalorieItem = (updatedItem, index) => {
    console.log(updatedItem);
    const updatedArray = [...items];
    // first the values inside object updatedArray[index] will be added
    // and then they will be overwritten by values of keys in updatedItem
    updatedArray[index] = { ...updatedArray[index], ...updatedItem };
    console.log(updatedArray[index]);
    setItems(updatedArray);
  };

  const deletingItems = (index) => {
    let updatedArray = [...items];
    updatedArray = updatedArray.filter((items, i) => i !== index);
    setItems(updatedArray);
  };

  return (
    <div className="container">
      <div className="input-group w-50 m-auto flex-nowrap mt-3">
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
      <ul className="d-flex flex-column">
        {items.length === 0 ? (
          <h3 className="m-auto mt-3 ">Start adding items</h3>
        ) : (
          items.map(({ food, calories }, index) =>
            food !== "" && calories !== "" ? (
              <TrackerCard
                food={food}
                key={index}
                calories={calories}
                update={updateCalorieItem}
                remove={deletingItems}
                index={index}
              />
            ) : (
              <>
                <div
                  class="alert alert-primary d-flex align-items-center w-75 mt-3 p-1"
                  role="alert"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
                    viewBox="0 0 16 16"
                    role="img"
                    aria-label="Warning:"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <div>Bad input</div>
                </div>
              </>
            )
          )
        )}

        {/* <TrackerCard /> */}
      </ul>
    </div>
  );
}

export default CaloriesTracker;
