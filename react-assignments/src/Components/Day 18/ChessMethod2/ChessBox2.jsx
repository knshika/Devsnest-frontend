import React from "react";
import Box2 from "./Box2";

function chessBox2() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="day18">
        <div className="chessBoard">
          {arr.map((row, rowIndex) => {
            return arr.map((column, colIndex) => {
              return <Box2 rowIndex={rowIndex} colIndex={colIndex} />;
            });
          })}
        </div>
      </div>
    </>
  );
}

export default chessBox2;
