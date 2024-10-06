import { Switch, Route } from "react-router-dom";
import Users from "../components/ManageUser/Users";
import Cars from "../components/Cars/Cars";
import Ticket from "../components/Ticket/Ticket";
import Admin from "../components/Admin/Admin";

const AdminRoutes = () => {
  return (
    <Switch>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/cars">
        <Cars />
      </Route>
      <Route path="/tickets">
        <Ticket />
      </Route>
      <Route path="/" exact>
        <Admin />
      </Route>
      <Route path="*">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
  );
};

export default AdminRoutes;
