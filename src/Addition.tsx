// En ny komponent Addition som har två inputfält och en knapp samt en p-tagg.
// När användaren klickar på knappen ska siffrorna i fälten adderas och summan visas i p-taggen.
//UTMANING: Se till att komponenten Addition fungerar oavsett vad användaren stoppar i textfälten.
// Töm fälten när man klickar på knappen. Sätt fokus tillbaka på första textfältet.
// Se till att taborder är korrekt.

import React from "react";
import { useState, useRef } from "react";

const Addition = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [sum, setSum] = useState(0);

  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddition = () => {
    setSum(Number(firstNumber) + Number(secondNumber));
    setFirstNumber("");
    setSecondNumber("");
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type="number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        ref={firstInputRef}
      />
      <input
        type="number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <button onClick={handleAddition}>Add</button>
      <p>{sum}</p>
    </div>
  );
};

export default Addition;
