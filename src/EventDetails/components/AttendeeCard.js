import React from 'react';
import {Card, Button, Image, Icon} from 'semantic-ui-react';
import {connect} from 'react-redux';
import startCase from "lodash/startCase";
import {addContact} from '../../services/UserService';

const AttendeeCard = ({attendee, attendee: {user}, addContact, contactList}) => {
  if (!attendee) return null;
  console.log(contactList);
  return (
    <Card color='teal' centered>
      <Image src={user.igPic}/>
      <Card.Content>
        <Card.Header>{user.igUsername}</Card.Header>
        <Card.Meta>{startCase(attendee.memberRole)}</Card.Meta>
        <Card.Description>
          <p><strong>Name:</strong> {user.igFullName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Service:</strong> {attendee.service}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          icon
          color='red'>
          Report
        </Button>
        <Button
          icon color='green'
          loading={contactList.fetching}
          onClick={() => addContact(user.uuid)}>
          Add to Contacts
        </Button>
      </Card.Content>
    </Card>
  )
};

const mapStateToProps = state => ({
  contactList: state.Queries.Contacts || {fetching: false}
});

const actions = {
  addContact
};

export default connect(
  mapStateToProps, actions
)(AttendeeCard);
