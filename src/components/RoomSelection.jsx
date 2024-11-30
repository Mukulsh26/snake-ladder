import React from "react";

// You can replace these with actual icons or images to represent snakes and ladders
const snakeIcon = "🐍"; // Placeholder for snake icon
const ladderIcon = "🪜"; // Placeholder for ladder icon

const RoomSelection = ({ onRoomSelect }) => {
  const roomOptions = [
    { label: `${ladderIcon} Room 1 (₹10) ${snakeIcon}`, value: 10, theme: "bg-gradient-to-r from-yellow-300 via-green-300 to-red-500" },
    { label: `${ladderIcon} Room 2 (₹20) ${snakeIcon}`, value: 20, theme: "bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-600" },
    { label: `${ladderIcon} Room 3 (₹50) ${snakeIcon}`, value: 50, theme: "bg-gradient-to-r from-orange-400 via-yellow-400 to-green-600" },
    { label: `${ladderIcon} Room 4 (₹100) ${snakeIcon}`, value: 100, theme: "bg-gradient-to-r from-pink-400 via-red-500 to-purple-700" },
    { label: `${ladderIcon} Room 5 (₹200) ${snakeIcon}`, value: 200, theme: "bg-gradient-to-r from-teal-400 via-green-400 to-blue-600" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="w-full max-w-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
        <h2 className="text-2xl font-bold text-center mb-4">
          🎲 Select a Room to Enter the Game 🎲
        </h2>
        <div className="space-y-6">
          {roomOptions.map((room) => (
            <button
              key={room.value}
              className={`${room.theme} w-full text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:opacity-80 transition-all duration-300`}
              onClick={() => onRoomSelect(room)}
            >
              {room.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomSelection;
