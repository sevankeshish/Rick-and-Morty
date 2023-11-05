import "./App.css";
import CharacterList from "./components/CharacterList";
import CharecterDetail from "./components/CHarecterDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <CharacterList />
        <CharecterDetail />
      </div>
    </div>
  );
}

export default App;
