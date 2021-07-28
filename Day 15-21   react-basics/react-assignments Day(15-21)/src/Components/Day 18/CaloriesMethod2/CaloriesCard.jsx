import "./style.css";

const CaloriesCard = (props) => {
  const { food, calories } = props;
  const ishealthy = calories > 150 ? "red" : "green";
  return (
    <div className="calories" style={{ backgroundColor: ishealthy }}>
      <div className="food">{food}</div>
      <div className="description">you have consumed {calories} cals today</div>
    </div>
  );
};

export default CaloriesCard;
