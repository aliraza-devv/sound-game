import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from './images/logo.svg';
import Home from "./Components/Home/Home";
import GameLevel1 from './Components/GameLevels/GameLevel1'
import GameLevel2 from './Components/GameLevels/GameLevel2'

function App() {
  return (
    <Router>
      <img src={logo} alt="LOGO" width={60} height={40} />
      <div className="App"> 
        <header className="App-header">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/gamelevel1" element={<GameLevel1/>} />
            <Route exact path="/gamelevel2" element={<GameLevel2 />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
