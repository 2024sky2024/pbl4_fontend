import Login from "../components/Login/Login";

import { Switch, Route } from "react-router-dom";
import Users from "../components/ManageUser/Users";
import Cars from "../components/Cars/Cars";
import Ticket from "../components/Ticket/Ticket";
import Admin from "../components/Admin/Admin";
const UserRoutes = (props) => {

  return (
    <>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/cars">
          < Cars />
        </Route>
        <Route path="/tickets">
          < Ticket />
        </Route>

        <Route path="/" exact>
          <Admin />
        </Route>
        <Route path="*">404 Not Found</Route>
      </Switch>
    </>
  );
};

export default UserRoutes;
