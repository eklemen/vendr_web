import React from 'react';
import {Button, Icon, Grid, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import { igLogin } from '../services/LoginService';
// import api from "../services/apiEndpoints";

const Login = () => {
  // const login = () => {
  //   return igLogin()
  // };

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
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' textAlign='center'>
            Log-in to your account
          </Header>
          <Button onClick={() => {
          }}>
            <Link to="/dashboard">
              <Icon
                name='instagram'
                color='orange'
                size='huge'/>
              <span>Login with Instagram</span>
            </Link>
          </Button>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
