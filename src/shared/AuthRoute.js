import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'compdata';
import {Route, Redirect} from 'react-router-dom';
import {getSelf} from '../services/UserService';

class AuthRoute extends Component {
  componentDidMount() {
    const {user, getSelf} = this.props;
    if(!user || !user.response) {
      getSelf();
    }
  }

  render() {
    const {
      component: Component,
      location,
      user,
      ...rest
    } = this.props;
    const token = window.localStorage.getItem('vendrToken');
    if (!user) return (<div>Loading...</div>);
    return (
      <Route
        {...rest}
        render={props =>
          token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {from: location}
              }}
            />
          )
        }
      />
    );
  }
};

const mapStateToProps = (state) => ({
  user: _.get(state.Queries, 'User')
});

const actions = {getSelf};

export default connect(
  mapStateToProps, actions
)(AuthRoute);
