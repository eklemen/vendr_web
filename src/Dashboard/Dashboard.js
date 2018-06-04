import React from 'react';
import {Grid, Header, List} from 'semantic-ui-react';
import {MyEventsTable} from './components';

const Dashboard = () => {

  const inlineStyle = {
    container: {marginTop: '4em'}
  };

  return (
    <Grid container verticalAlign='top' style={inlineStyle.container} stackable>
      <Grid.Row centered>
        <Header>Dashboard</Header>
      </Grid.Row>
      <Grid.Row columns={2} divided>
        <Grid.Column width={3}>
          <List>
            <List.Item as='a'>View all events near me</List.Item>
            <List.Item as='a'>Create Event</List.Item>
            <List.Item as='a'>View Vendor Contacts</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={13} className="h100" verticalAlign="middle">
          <MyEventsTable/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Dashboard;
