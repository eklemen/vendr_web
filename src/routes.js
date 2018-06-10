import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AuthRoute from './shared/AuthRoute';
import Navbar from './shared/Navbar';
import Login from './Login/Login';
import Logout from './Login/Logout';
import Dashboard from './Dashboard/Dashboard';
import EventDetails from './EventDetails/EventDetails';
import FetchUser from './shared/FetchUser';


const Routes = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/auth/callback" component={FetchUser}/>
        <AuthRoute path="/dashboard" component={Dashboard}/>
        <AuthRoute path="/eventDetails" component={EventDetails}/>
      </Switch>
    </div>
  </Router>
);

export default Routes;