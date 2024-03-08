//Skapa komponenten List som har ett textfält, knapp och ul.

// När användaren klickar på knappen ska en ny punkt läggas till i listan med det som stod i textfältet.

//UTMANING: Töm textfältet när man klickar på knappen och sätt tillbaka fokus på textfältet. Tänk på taborder.

//UTMANING: Lägg till en dropdown med ett antal emojis på djur. När användaren klickar på knappen ska emojin och texten läggas till listan.

import { useState, useRef } from "react";

const List = () => {
  const [List, setList] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  inputRef.current?.focus();

  // använda useRef för att sätta fokus på inputfält?

  const handleAddText = () => {
    setList([...List, `${selectedEmoji} ${input}`]);
    setInput("");
    setSelectedEmoji("");
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <select
        value={selectedEmoji}
        onChange={(e) => setSelectedEmoji(e.target.value)}
      >
        <option value="">Select Emoji</option>
        <option value="🐶">Dog</option>
        <option value="🐱">Cat</option>
        <option value="🐰">Rabbit</option>
        <option value="🐒">Monkey</option>
        <option value="🦍">Gorilla</option>
      </select>
      <button onClick={handleAddText}>Add Text</button>
      <ul>
        {List.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
