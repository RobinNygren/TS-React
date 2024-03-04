import { useRef } from "react";
const TextToAlert = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      alert(inputValue);
    }
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleButtonClick}>Text to Alert</button>
    </div>
  );
};

export default TextToAlert;
