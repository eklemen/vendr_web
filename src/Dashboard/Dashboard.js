import React, {Component} from 'react';
import {Grid, Header} from 'semantic-ui-react';
import {connect} from 'compdata';

class Dashboard extends Component {

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Header textAlign='center'>Hello Dashboard</Header>
          <button onClick={() => {
            this.props.setData({foo: "bar"})
          }}>Click me
          </button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(null)(Dashboard, 'Dashboard');
