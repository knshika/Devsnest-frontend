import "./style.css";

const CaloriesCard = (props) => {
  const { food, calories } = props;
  return (
    <div className="calories">
      <div className="food">{food}</div>
      <div className="description">you have consumed {calories} cals today</div>
    </div>
  );
};

export default CaloriesCard;
