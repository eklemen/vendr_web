import React from 'react';
import {Card, Button, Image, Icon} from 'semantic-ui-react';

const ClientCard = ({client}) => {
  let cardContent = [
    (<Icon name='user' size='huge' key='user'/>),
    (<Card.Header style={{marginTop: '16px'}} key='header'>No host for this event</Card.Header>)
  ];
  let buttons = (
    <Button basic color='green' fluid>
      <Icon name='plus'/>
      Add a host
    </Button>
  );
  if (client && client.user) {
    cardContent = [
      (<Image floated='right' size='mini' key={client.user.igPic} src={client.user.igPic}/>),
      (<Card.Header key={client.user.igUsername}>{client.user.igUsername}</Card.Header>),
      (<Card.Meta key='eventHost'>Event Host</Card.Meta>)
    ];
    buttons = (
      <div className='ui two buttons'>
        <Button basic color='green'>Approve</Button>
        <Button basic color='red'>Decline</Button>
      </div>
    )
  }
  return (
    <Card fluid raised>
      <Card.Content textAlign='center'>
        {cardContent}
      </Card.Content>
      <Card.Content extra>
        {buttons}
      </Card.Content>
    </Card>
  )
};

export default ClientCard;
