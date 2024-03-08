import Addition from "./Addition";
import "./App.css";
import ChangeText from "./ChangeText";
import ColorBox from "./ColorBox";
import Counter from "./Counter";
import Header from "./Header";
import List from "./List";
import NewCounter from "./NewCounter";
import PrettyText from "./PrettyText";
import QuestList from "./QuestList";
import Stringer from "./Stringer";
import TextToAlert from "./TextToAlert";
import VehiclesList from "./VehiclesList";

function App() {
  return (
    <>
      <Header>
        TS-React övningar <span>ngt mer?</span>
      </Header>
      <Counter />
      <TextToAlert />
      <ChangeText />
      <Addition />
      <ColorBox />
      <QuestList />
      <VehiclesList />
      <PrettyText />
      <List />
      <NewCounter />
      <Stringer />
    </>
  );
}

export default App;
