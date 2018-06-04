import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AuthRoute from './shared/AuthRoute';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import EventDetails from './EventDetails/EventDetails';
import FetchUser from './shared/FetchUser';


const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/auth/callback" component={FetchUser}/>
      <AuthRoute path="/dashboard" component={Dashboard}/>
      <AuthRoute path="/eventDetails" component={EventDetails}/>
    </Switch>
  </Router>
);

export default Routes;