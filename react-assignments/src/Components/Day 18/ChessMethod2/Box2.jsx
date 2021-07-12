import React from "react";

const Box2 = ({ rowIndex, colIndex }) => {
  let filled = {
    backgroundColor: "black",
  };
  let unfilled = {
    backgroundColor: "white",
  };
  return (
    <div>
      <div
        class="square"
        style={
          rowIndex % 2 === 0
            ? colIndex % 2 === 0
              ? filled
              : unfilled
            : colIndex % 2 === 0
            ? unfilled
            : filled
        }
      ></div>
    </div>
  );
};

export default Box2;
