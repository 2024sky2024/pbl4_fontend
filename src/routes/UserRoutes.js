import Login from "../components/Login/Login";
import Login2 from "../components/Login/Login2";
import { Switch, Route } from "react-router-dom";

const UserRoutes = (props) => {

  return (
    <>
      <Switch>

        <Route path="/login">
          {/* <Login /> */}
          <Login2 />
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
