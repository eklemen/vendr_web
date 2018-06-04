import React, {Component} from 'react';
import {Grid, Header, Segment, Label, Container, Modal} from 'semantic-ui-react';
import {connect} from 'compdata';
import eventAttendees from '../tests/mockData/eventAttendees';
import selfEventsList from '../tests/mockData/selfEventsList';
import {ClientCard, AttendeesTable, AttendeeCard} from "./components";
import {getEventDetails} from '../services/EventService';

const queryString = require('query-string');

class EventDetails extends Component {
  componentDidMount() {
    const {getEventDetails,
      selectedEvent,
      location: {search},
      history
    } = this.props;
    if (!selectedEvent || !selectedEvent.uuid) {
      const id = queryString.parse(search).id;
      if (!id) history.push('/dashboard');
      getEventDetails(id)
    } else {
      getEventDetails(selectedEvent.uuid)
    }
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
    const {eventDetails} = this.props;
    if (eventDetails.fetching) return (<div>Loading...</div>);
    if (eventDetails.error) return <div>Something went wrong</div>;
    
    const {data} = selfEventsList;
    const event = data[0];
    const margin = {margin: "1rem auto 2rem auto"};
    return (<div>Foo</div>);
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
            <AttendeeCard attendee={selectedUser}/>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedEvent: state.CompData.MyEventsTable,
  eventDetails: state.Queries.EventDetails || {}
});

const actions = {
  getEventDetails
};

export default connect(
  mapStateToProps, actions
)(EventDetails, 'EventDetails');
