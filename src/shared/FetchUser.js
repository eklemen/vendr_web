import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {getToken} from '../services/UserService';
import {connect} from 'compdata';

class FetchUser extends Component {
  componentDidMount() {
    const {getToken, history} = this.props;
    getToken().then(r => {
      window.localStorage.setItem('vendrToken', r.payload.data.token);
      history.push('/dashboard')
    }).catch(() => {
      history.push('/login')
    });
  }

  render() {
    return (<div>Loading...</div>);
  }
}

const actions = {
  getToken
};

export default withRouter(connect(null, actions)(FetchUser, 'FetchUser'));
