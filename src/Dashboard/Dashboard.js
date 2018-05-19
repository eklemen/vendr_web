import React, {Component} from 'react';
import {Grid, Header, List, Table} from 'semantic-ui-react';
import {connect} from 'compdata';
import selfEventsList from '../tests/mockData/selfEventsList';

class Dashboard extends Component {

  selectRow = (rowId) => {
    console.log(rowId);
  };

  render() {
    return (
      <Grid container verticalAlign='top' className="mt1">
        <Grid.Row centered>
          <Header>Hello Dashboard</Header>
        </Grid.Row>
        <Grid.Row columns={2} divided>
          <Grid.Column width={3}>
            <button onClick={() => {
              this.props.setData({foo: "bar"})
            }}>Click me
            </button>
            <List>
              <List.Item as='a'>View all events near me</List.Item>
              <List.Item as='a'>Create Event</List.Item>
              <List.Item as='a'>View Vendor Contacts</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={13} className="h100">
            <Table padded color="teal" selectable basic='very'>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Venue</Table.HeaderCell>
                  <Table.HeaderCell>Date</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                  selfEventsList.data.map(e => (
                    <Table.Row
                      key={e.uuid}
                      onClick={() => { this.selectRow(e.uuid) }}>
                      <Table.Cell>
                        {e.title}
                      </Table.Cell>
                      <Table.Cell>
                        {e.venue}
                      </Table.Cell>
                      <Table.Cell>
                        {e.eventDate}
                      </Table.Cell>
                    </Table.Row>
                  ))
                }
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null)(Dashboard, 'Dashboard');
