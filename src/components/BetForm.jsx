import React, { useState } from "react";

const BetForm = ({ onBetSubmit, betAmount, onCloseModal }) => {
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedNumber || selectedNumber < 1 || selectedNumber > 100) {
      alert("Please enter a valid number between 1 and 100!");
      return;
    }
    onBetSubmit({ number: selectedNumber, amount: betAmount }); 
    setSelectedNumber(""); 
    onCloseModal(); 
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <div className="relative w-full max-w-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg p-6 text-white">
        <button
          onClick={onCloseModal}
          className="absolute top-2 right-2 text-white text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          🎲 Place Your Bet 🎲
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col items-start">
            <label htmlFor="selectedNumber" className="text-lg font-semibold">
              Choose a Number (1-100):
            </label>
            <input
              type="number"
              id="selectedNumber"
              value={selectedNumber}
              onChange={(e) => setSelectedNumber(e.target.value)}
              className="w-full px-4 py-2 mt-2 rounded-lg border-none text-gray-800 focus:ring-4 focus:ring-yellow-300 focus:outline-none transition-all duration-300"
              placeholder="Enter a number"
              min="1"
              max="100"
              required
            />
          </div>

          <div className="flex flex-col items-start">
            <label className="text-lg font-semibold">Bet Amount (₹):</label>
            <input
              type="text"
              value={`₹${betAmount}`}
              readOnly
              className="w-full px-4 py-2 mt-2 rounded-lg border-none text-gray-800 bg-gray-300 focus:ring-4 focus:ring-yellow-300 focus:outline-none transition-all duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300"
          >
            🔥 Place Bet 🔥
          </button>
        </form>
      </div>
    </div>
  );
};

export default BetForm;
