import CaloriesCard from "./caloriesCard";
import "./style.css";

const DisplayCard = () => {
  return (
    <div className="body17">
      <header>Calorie App</header>
      <div className="content">
        <div className="calorieBox">
          <CaloriesCard />
          <CaloriesCard />
          <CaloriesCard />
          <CaloriesCard />
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
