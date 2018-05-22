import React from 'react';
import {Header, Table, Image} from 'semantic-ui-react';
import startCase from "lodash/startCase";

const AttendeesTable = ({attendees, viewUserDetail}) => {
  const inlineStyle = {tableCell: {paddingLeft: '1em'}};
  return (
    <Table celled basic='very' selectable padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            <Header as='h3'>Instagram</Header>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Header as='h3'>Service</Header>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {
          attendees.map(e => (
            <Table.Row
              key={e.user.uuid}
              onClick={viewUserDetail(e)}>
              <Table.Cell style={inlineStyle.tableCell}>
                <Header as='h3' image>
                  <Image src={e.user.igPic} rounded size='mini'/>
                  <Header.Content>
                    {e.user.igUsername}
                    <Header.Subheader>{e.user.email}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Header as='h4'>{startCase(e.service)}</Header>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  )
};

export default AttendeesTable;
