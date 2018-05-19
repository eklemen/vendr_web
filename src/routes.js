import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import EventDetails from './EventDetails/EventDetails';


const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/eventDetails" component={EventDetails}/>
    </Switch>
  </Router>
);

export default Routes;