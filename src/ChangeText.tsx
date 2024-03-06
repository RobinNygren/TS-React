// En ny komponent ChangeText innehåller ett input-fält för text, en knapp och en p-tagg. När man klickar på knappen så kopieras texten från input till p-taggen.
//UTMANING: Ändra "kopiera" till "flytta" dvs inputfältet töms. Sätt även fokus tillbaka på inputfältet. Om textfältet är tomt ska inte p-taggen ändras.

import { useRef, useState } from "react";

const ChangeText = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    if (text !== "") {
      setText("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" value={text} onChange={handleChange} />
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleChange}>Add</button>
      <p>{text}</p>
    </div>
  );
};

export default ChangeText;
