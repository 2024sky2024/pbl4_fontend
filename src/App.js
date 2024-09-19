import logo from './logo.svg';
import './App.scss';
import MyNavBar from './components/Nav/Nav';
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
function App() {
  return (

    <Router>
      <div>
        {/* <MyNavBar /> */}
        < Login />
  
      </div>
    </Router>
  );
}

export default App;
