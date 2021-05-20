
import './App.css';
import Cal from './components/calculator/Cal';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Weather from './components/weather/Weather';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Cal/>
      <Weather/>
    </div>
  );
}

export default App;
