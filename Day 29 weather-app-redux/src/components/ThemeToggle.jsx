
import ".././styles.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../actions";

const ThemeToggle = () => {
 
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  return (
      <div className="toggle-theme">
<button className={theme?"btn btn-light dark":"btn btn-dark "} onClick={()=>{
dispatch(toggleTheme())
}}>{theme ? "Light" : "Dark"}</button>
      </div>
    
  );
};

export default ThemeToggle;
