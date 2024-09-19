import Login from "../components/Login/Login";

import { Switch, Route } from "react-router-dom";

const UserRoutes = (props) => {
 
    return (
      <>
        <Switch>
    
          <Route path="/login">
            <Login />
          </Route>
         
          
        

          <Route path="*">404 Not Found</Route>
        </Switch>
      </>
    );
  };
  
  export default UserRoutes;
  