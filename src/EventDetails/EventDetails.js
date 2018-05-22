import React, {Component} from 'react';
import {Grid, Header, Segment, Label, Container, Modal} from 'semantic-ui-react';
import {connect} from 'compdata';
import eventAttendees from '../tests/mockData/eventAttendees';
import selfEventsList from '../tests/mockData/selfEventsList';
import {ClientCard, AttendeesTable, AttendeeCard} from "./components";

class EventDetails extends Component {
  componentDidMount() {
    // get attendees
  }

  state = {open: false, selectedUser: null};

  viewUserDetail = selectedUser => () => {
    this.setState({
      selectedUser, open: true
    });
    console.log(selectedUser);
  };

  close = () => this.setState({open: false, selectedUser: null});

  render() {
    const {open, selectedUser} = this.state;
    const {data} = selfEventsList;
    const event = data[0];
    const margin = {margin: "1rem auto 2rem auto"};
    const client = eventAttendees.data.find(a => a.memberRole === 'client');
    const attendees = eventAttendees.data.filter(a => a.memberRole === 'vendor');
    const inlineStyle = {
      modal: {
        marginTop: '0px !important',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    };
    return (
      <div>
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
              {
                client && <ClientCard user={client.user}/>
              }
            </Grid.Column>

            <Grid.Column width={10}>
              <Segment>
                <AttendeesTable
                  viewUserDetail={this.viewUserDetail}
                  attendees={attendees}/>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Modal
          size="tiny"
          open={open}
          basic
          dimmer='blurring'
          onClose={this.close}
          style={inlineStyle.modal}>
          <Modal.Content>
            <AttendeeCard attendee={selectedUser} />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default connect(null)(EventDetails, 'EventDetails');
