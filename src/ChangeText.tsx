import { useRef, useState } from "react";

const ChangeText = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleClick = () => {
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
      <button onClick={handleClick}>Clear</button>
      <p>{text}</p>
    </div>
  );
};

export default ChangeText;
