
import './App.css';
import Cal from './components/calculator/Cal';
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Weather from './components/weather/Weather';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './components/notfound/Notfound';

function App() {
  return (
 
    <div>
      
    <Router>
    <div className="App">
      <Navbar/>
     
     <div className="content">
     <Switch>
       <Route exact path="/">
         <Header/>
       </Route>
       <Route path="/cal">
         <Cal/>
       </Route>
       <Route path="/weather">
         <Weather/>
       </Route>
       <Route path="*">
         <NotFound/>
       </Route>
     </Switch>
  
     </div>
    </div>
    </Router>
    
    </div>
  );
}

export default App;
