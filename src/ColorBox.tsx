//Skapa komponenten ColorBox som innehåller ett textfält, en knapp och en div.
//När användaren klickar på knappen ska diven få den färgen som användaren skrivit i textfältet.
//UTMANING: Användaren får bara skriva korrekta och fungerande hexadecimala värden i textfältet.

import { useState, useRef } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("#" + "");
  const [boxColor, setBoxColor] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const addColor = () => {
    const hexColorRegex = /^#([0-9A-F]{3}){1,2}$/i;
    if (hexColorRegex.test(color)) {
      setBoxColor(color);
      setColor("#" + "");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      alert("Please enter a valid hexadecimal color code.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={color}
        onChange={handleColorChange}
        placeholder="Type a color..."
        ref={inputRef}
      />
      <button onClick={addColor}>Add color</button>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
        }}
      ></div>
    </div>
  );
};

export default ColorBox;
