import logo from './logo.svg';
import './App.scss';
import MyNavBar from './components/Nav/Nav';
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login/Login";
import Users from './components/ManageUser/Users';
import AdminRoutes from './routes/AdminRoutes';
import { useEffect, useState, useContext } from "react";
import { UserContext } from './context/UserContext';
import { Rings } from "react-loader-spinner";
function App() {
  const { user } = useContext(UserContext);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    let windowHeight = window.innerHeight;
    setScrollHeight(windowHeight);
    // console.log("user:");
    console.log(user);
  }, [user]);
  return (

    <Router>
       {user && user.isLoading ? (
          <div className="loading-container">
            <Rings
              heigth="100"
              width="100"
              color="#1877f2"
              ariaLabel="loading"
            />
            <div>Loading data...</div>
          </div>
        ):(
          <div>
          <MyNavBar />
          {/* < Login /> */}
          <div className='container_Admin'>
            <AdminRoutes />
          </div>
          </div>
  
        )}
      
    </Router>
  );
}

export default App;
