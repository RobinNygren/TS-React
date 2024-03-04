import Addition from "./Addition";
import "./App.css";
import ChangeText from "./ChangeText";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import Header from "./Header";
import TextToAlert from "./TextToAlert";

function App() {
  return (
    <>
      <Header>
        RUBRIK och <span>ngt mer?</span>
      </Header>
      <Counter />
      <TextToAlert />
      <ChangeText />
      <Addition />
      <ColorBox />
    </>
  );
}

export default App;
