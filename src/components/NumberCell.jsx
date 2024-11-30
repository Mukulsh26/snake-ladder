import React from "react";

const NumberCell = ({ number, betCount, isSnake, isLadder }) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-gradient-to-t from-blue-500 via-indigo-600 to-purple-800 text-white rounded-lg shadow-lg hover:scale-105 hover:rotate-3d transition-all duration-300 p-4 w-20 h-20 cursor-pointer`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      }}
    >
      <span className="absolute top-2 left-2 text-sm font-bold">{number}</span>
      <div className="absolute bottom-2 text-xs font-semibold">
        {betCount > 0 ? `${betCount} Bets` : "No Bets"}
      </div>

      {/* Show Snake or Ladder */}
      {isSnake && (
        <span className="absolute text-2xl text-red-600 transform rotate-90 top-3 right-3">
          🐍
        </span>
      )}
      {isLadder && (
        <span className="absolute text-2xl text-green-600 top-3 right-3">
          🪜
        </span>
      )}

      <div className="absolute inset-0 rounded-lg bg-opacity-30 bg-black hover:bg-opacity-50 transition duration-300"></div>
    </div>
  );
};

export default NumberCell;
