import { allCharacters } from "../data/data";

import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharecterDetail from "./components/CHarecterDetail";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList characters={allCharacters} />
        <CharecterDetail />
      </div>
    </div>
  );
}

export default App;
