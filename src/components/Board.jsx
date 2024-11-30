import React from "react";
import NumberCell from "./NumberCell";

// Snakes and Ladders Mapping
const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

const Board = ({ bets }) => {
  const boardNumbers = Array.from({ length: 100 }, (_, i) => 100 - i); // Create board with 100 squares

  return (
    <div
      className="relative grid grid-cols-10 gap-2 sm:gap-4 md:gap-6 lg:gap-8 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl mb-6"
      style={{
        background: "radial-gradient(circle, #6a0dad, #fbbf24)",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        borderRadius: "20px",
      }}
    >
      {boardNumbers.map((number) => (
        <div key={number} className="relative">
          <NumberCell
            number={number}
            betCount={bets[number - 1]}
            isSnake={snakes[number]}
            isLadder={ladders[number]}
          />
        </div>
      ))}
    </div>
  );
};

export default Board;
