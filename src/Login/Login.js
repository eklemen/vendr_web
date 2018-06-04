import React from 'react';
import { Icon, Grid, Header } from 'semantic-ui-react';
// import { igLogin } from '../services/LoginService';
import api from "../services/apiEndpoints";

const Login = () => {
  return (
    <div className='login-form'>
      <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
      <Grid
        textAlign='center'
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Log-in to your account
          </Header>
          <a href={api.login}>
            <Icon
              name='instagram'
              color='orange'
              size='huge' />
            <span>Login with Instagram</span>
          </a>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
