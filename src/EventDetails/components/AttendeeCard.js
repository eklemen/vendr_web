import React from 'react';
import {Card, Button, Image, Popup} from 'semantic-ui-react';
import startCase from "lodash/startCase";

const AttendeeCard = ({attendee, attendee:{user}}) => {
    if(!attendee) return null;
    return (
      <Card color='teal' centered>
        <Image src={user.igPic} />
        <Card.Content>
          <Card.Header>{user.igUsername}</Card.Header>
          <Card.Meta>{startCase(attendee.memberRole)}</Card.Meta>
          <Card.Description>
            <p>Matthew is a musician living in Nashville.</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Service:</strong> {attendee.service}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Popup
            trigger={<Button icon='remove user' color='red' />}
            content='This user did not attend this event.'
          />
          <Popup
            trigger={<Button icon='add' color='blue' />}
            content='Add user to contacts'
          />
        </Card.Content>
      </Card>
    )
};

export default AttendeeCard;
