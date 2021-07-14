import CaloriesCard from "./CaloriesCard";
import React, { useState } from "react";
import "./style.css";

const defaultCalorieArr = [
  { food: "Pizza", calories: 56 },
  { food: "Burger", calories: 69 },
  { food: "Coke", calories: 500 },
  { food: "Brownie", calories: 180 },
  { food: "Fried Rice", calories: 90 },
  { food: "Lassania", calories: 200 },
  { food: "Pani puri", calories: 10 },
  { food: "Chicken", calories: 500 },
  { food: "Ice Cream", calories: 50 },
  { food: "Chocolate", calories: 100 },
];

const DisplayCaloriesCard = () => {
  const [calorieArr, setCalorieArr] = useState(defaultCalorieArr);

  const deleteCalorieCard = (food) => {
    const updatedCalorieArr = calorieArr.filter((item) => item.food !== food);
    setCalorieArr(updatedCalorieArr);
    console.log(updatedCalorieArr);
  };

  return (
    <div className="body17">
      <header>Calorie App</header>
      <div className="content">
        <div className="calorieBox">
          {calorieArr.map((element) => (
            <CaloriesCard
              deleteCalorieCard={deleteCalorieCard}
              food={element.food}
              calories={element.calories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayCaloriesCard;
