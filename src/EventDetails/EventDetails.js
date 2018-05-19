import React, {Component} from 'react';
import {Grid, Header, Segment, Label, Container, Card, Button, Image, Table} from 'semantic-ui-react';
import {connect} from 'compdata';
import eventAttendees from '../tests/mockData/eventAttendees';
import selfEventsList from '../tests/mockData/selfEventsList';

class EventDetails extends Component {
  componentDidMount() {
    // get attendees
  }

  render() {
    const {data} = selfEventsList;
    const event = data[0];
    const margin = {margin: "1rem auto 2rem auto"};
    const client = eventAttendees.data.find(a => a.memberRole === 'client');
    return (
      <Grid container verticalAlign='top' stackable>
        <Grid.Row centered>
          <Header as='h1'>{event.title}</Header>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <Segment raised>
              <Container>
                <Label color='teal' size="large" ribbon>Event Name</Label>
                <Header as="h3" style={margin}>{event.title}</Header>
                <Label color='teal' size="large" ribbon>Venue</Label>
                <Header as="h3" style={margin}>{event.venue}</Header>
                <Label color='teal' size="large" ribbon>Date of Event</Label>
                <Header as="h3" style={margin}>{event.eventDate}</Header>
              </Container>
            </Segment>
            { client &&
              (<Card color='yellow' fluid>
                <Card.Content>
                  <Image floated='right' size='mini' src={client.user.igPic} />
                  <Card.Header>{client.user.igUsername}</Card.Header>
                  <Card.Meta>Event Host</Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Decline</Button>
                  </div>
                </Card.Content>
              </Card>)
            }
          </Grid.Column>

          <Grid.Column width={10}>
            <Segment>
              <Table padded color="teal" selectable basic='very'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Instagram</Table.HeaderCell>
                    <Table.HeaderCell>Venue</Table.HeaderCell>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {
                    eventAttendees.data.map(e => (
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
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null)(EventDetails, 'EventDetails');
