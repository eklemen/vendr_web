import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

class Dashboard extends Component {

  render() {
    return(
      <Grid>
        <Grid.Column>
          <Header textAlign='center'>Hello Dashboard</Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Dashboard
