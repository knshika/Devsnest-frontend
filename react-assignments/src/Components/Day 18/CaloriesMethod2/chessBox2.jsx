import React from "react";

function chessBox2() {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="chessBoard">
        <div className="maindiv" id="mID">
          {arr.map((row) => {
            return arr.map((column, i) => {
              return <div key={i} className={``}></div>;
            });
          })}
        </div>
      </div>
    </>
  );
}

export default chessBox2;
