import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [favNumbers, setFavNumbers] = useState({ Starling: null, Andrea: null });
  const [turn, setTurn] = useState("Starling"); 
  const decreaseCount = () => {
    setCount((count) => (count > 0 ? count - 1 : 0));
  };

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const selectFavoriteNumber = () => {
    setFavNumbers((prev) => ({
      ...prev,
      [turn]: count, 
    }));
    setTurn(turn === "Starling" ? "Andrea" : "Starling"); 
  };

  const resetFavorites = () => {
    setFavNumbers({ Starling: null, Andrea: null });
    setCount(0)
    setTurn("Starling");
  };

  return (
    <div className="card">
      <p><strong>{count}</strong></p>
      <div>
        <button onClick={increaseCount}>➕</button>
        <span style={{ margin: '0 20px' }}></span> {}
        <button onClick={decreaseCount}>➖</button>
      </div>
      <button onClick={selectFavoriteNumber}>Select</button>
      <button onClick={resetFavorites}>Reset</button>
      
      {favNumbers.Starling !== null && <p>El numero favorito Starling: {favNumbers.Starling}</p>}
      {favNumbers.Andrea !== null && <p>El numero favorito Andrea: {favNumbers.Andrea}</p>}
    </div>
  );
};

export default Counter;