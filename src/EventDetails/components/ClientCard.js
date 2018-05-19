import React from 'react';
import {Card, Button, Image} from 'semantic-ui-react';

const ClientCard = ({user}) => {
    return (
      <Card color='yellow' fluid>
        <Card.Content>
          <Image floated='right' size='mini' src={user.igPic} />
          <Card.Header>{user.igUsername}</Card.Header>
          <Card.Meta>Event Host</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button basic color='red'>Decline</Button>
          </div>
        </Card.Content>
      </Card>
    )
};

export default ClientCard;
