import React from "react";
import ButtonClass from "./ButtonClass";
import ButtonFunction from "./ButtonFunction";
import "./style.css";

function RenderButton() {
  return (
    <div className="day20">
      <h2>
        There are 4 counter component instances that each manage their own
        state.
      </h2>
      <div className="buttons">
        <ButtonClass />
        <ButtonFunction />
        <ButtonFunction />
        <ButtonFunction />
      </div>
    </div>
  );
}

export default RenderButton;
