import React, { useState } from "react";
import RoomSelection from "./components/RoomSelection";
import Board from "./components/Board";
import BetForm from "./components/BetForm";

const App = () => {
  const [bets, setBets] = useState(Array(100).fill(0));
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleBetSubmit = ({ number, amount }) => {
    const updatedBets = [...bets];
    updatedBets[number - 1] += 1;
    setBets(updatedBets); 
    setIsModalOpen(false); 
  };

  
  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  
  const handleBackToRoomSelection = () => {
    setSelectedRoom(null); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex flex-col items-center px-4 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold my-6 text-center">Lottery Game: Snakes and Ladders</h1>

      
      {selectedRoom && (
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-40 sm:w-52 bg-yellow-400 text-gray-900 font-bold px-3 py-3 rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-2xl transition-all duration-300"
          >
            🔥 Place Bet 🔥
          </button>

          
          <button
            onClick={handleBackToRoomSelection}
            className="w-40 sm:w-52 bg-gray-400 text-gray-900 font-bold px-3 py-3 rounded-lg shadow-lg hover:bg-gray-500 hover:shadow-2xl transition-all duration-300"
          >
            ⬅️ Back
          </button>
        </div>
      )}

      
      {!selectedRoom ? (
        <RoomSelection onRoomSelect={handleRoomSelect} />
      ) : (
        <div className="w-full max-w-screen-lg">
          <Board bets={bets} />
        </div>
      )}

      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <BetForm
              betAmount={selectedRoom?.value}
              onBetSubmit={handleBetSubmit}
              onCloseModal={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
