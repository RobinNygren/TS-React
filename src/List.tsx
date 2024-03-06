//Skapa komponenten List som har ett textfält, knapp och ul. När användaren klickar på knappen ska en ny punkt läggas till i listan med det som stod i textfältet.

//UTMANING: Töm textfältet när man klickar på knappen och sätt tillbaka fokus på textfältet. Tänk på taborder.

//UTMANING: Lägg till en dropdown med ett antal emojis på djur. När användaren klickar på knappen ska emojin och texten läggas till listan.

import { useState } from "react";

const List = () => {
  const [List, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleAddText = () => {
    setList([...List, input]);
    setInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddText}>Add Text</button>
      <ul>
        {List.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
