import CaloriesCard from "./caloriesCard";
import "./style.css";

const calorieArr = [
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

const DisplayCard = () => {
  return (
    <div className="body17">
      <header>Calorie App</header>
      <div className="content">
        <div className="calorieBox">
          {calorieArr.map((element) => (
            <CaloriesCard food={element.food} calories={element.calories} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
