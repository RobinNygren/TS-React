// En ny komponent Addition som har två inputfält och en knapp samt en p-tagg.
// När användaren klickar på knappen ska siffrorna i fälten adderas och summan visas i p-taggen.
//UTMANING: Se till att komponenten Addition fungerar oavsett vad användaren stoppar i textfälten.
// Töm fälten när man klickar på knappen. Sätt fokus tillbaka på första textfältet.
// Se till att taborder är korrekt.

import React from "react";
import { useState } from "react";

const Addition = () => {
  const [firstNumber, setFirstNumber] = useState(0 || "");
  const [secondNumber, setSecondNumber] = useState(0 || "");
  const [sum, setSum] = useState(0 || "");

  const handleAddition = () => {
    setSum(String(firstNumber) + String(secondNumber));
  };
  return (
    <div>
      <input
        type="text"
        value={firstNumber}
        onChange={(e) => setFirstNumber(String(e.target.value))}
      />
      <input
        type="text"
        value={secondNumber}
        onChange={(e) => setSecondNumber(String(e.target.value))}
      />
      <button onClick={handleAddition}>Add</button>
      <p>{sum}</p>
    </div>
  );
};

export default Addition;
