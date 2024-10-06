import './App.scss';
import MyNavBar from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import AdminRoutes from './routes/AdminRoutes';
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("pbl4"); // Kiểm tra token khi tải ứng dụng
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    const token = "fake-token"; // Giả lập token
    localStorage.setItem("pbl4", token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("pbl4"); // Xóa token khi đăng xuất
    setIsLoggedIn(false); // Đặt lại trạng thái đăng nhập
  };

  return (
    <Router>
      <Switch>
        {/* Nếu chưa đăng nhập, hiển thị trang đăng nhập */}
        {!isLoggedIn && (
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
        )

        }


        {/* Nếu đã đăng nhập, hiển thị navbar và các route admin */}
        {isLoggedIn && (
          <>
            <MyNavBar onLogout={handleLogout} />
            <div className='container_Admin'>
              <AdminRoutes />
            </div>
          </>
        )}

        {/* Chuyển hướng về trang login nếu chưa đăng nhập và truy cập vào các route khác */}
        <Route path="/">
          {isLoggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
