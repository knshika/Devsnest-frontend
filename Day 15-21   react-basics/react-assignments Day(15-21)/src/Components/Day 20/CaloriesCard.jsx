import "./style.css";

const CaloriesCard = (props) => {
  const { food, calories, deleteCalorieCard } = props;

  return (
    <div className="calories">
      <div className="action">
        <div className="food">{food}</div>
        <button onClick={() => deleteCalorieCard(food)}>Delete</button>
      </div>

      <div className="description">you have consumed {calories} cals today</div>
    </div>
  );
};

export default CaloriesCard;
