import React, {Component} from 'react';
import {connect} from 'compdata';
import {logout} from '../services/AuthService';

class Logout extends Component {
  async componentDidMount() {
    await logout();
    await this.props.setData({token: null});
    await this.props.history.push('/login')
  }

  render() {
    return null
  }
}

export default connect(null)(Logout, 'Auth');
