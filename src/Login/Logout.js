import React, {Component} from 'react';
import {connect} from 'compdata';
import {logout} from '../services/AuthService';

class Logout extends Component {
  async componentDidMount() {
    await logout();
    await window.localStorage.setItem('vendrToken', '');
    await this.props.history.push('/login')
  }

  render() {
    return null
  }
}

export default connect(null)(Logout, 'Auth');
