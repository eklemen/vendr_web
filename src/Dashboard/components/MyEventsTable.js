import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Table, Loader} from 'semantic-ui-react';
import {connect} from 'compdata';
import format from 'date-fns/format';
import {getMyEventsList} from '../../services/UserService';

class MyEventsTable extends Component {
  componentDidMount() {
    const {myEventList, getMyEventsList} = this.props;
    if (!myEventList.response) {
      getMyEventsList();
    }
  }

  selectRow = uuid => () => {
    const {setData, history} = this.props;
    setData({uuid});
    history.push(`/eventDetails?id=${uuid}`);
  };

  render() {
    const {myEventList} = this.props;
    const inlineStyle = {
      tableCell: {paddingLeft: '1em'},
      loader: {height: '100%'}
    };
    if (myEventList.fetching || !myEventList.fetched) {
      return (<Loader active content='Loading...'/>);
    }
    let tableBody = null;
    if (myEventList.fetched && !!myEventList.error) {
      tableBody = (<Table.Row>
        <Table.Cell disabled/>
        <Table.Cell disabled>Could not load events at this time.</Table.Cell>
      </Table.Row>);
    }
    if (myEventList.fetched && !myEventList.error) {
      const {response: eventList = []} = myEventList;
      tableBody = eventList.length
        ? eventList.map(e => {
          const {event: {uuid, title, venue, eventDate}} = e;
          return (
            <Table.Row
              key={uuid}
              onClick={this.selectRow(uuid)}>
              <Table.Cell style={inlineStyle.tableCell}>
                {title}
              </Table.Cell>
              <Table.Cell>
                {venue}
              </Table.Cell>
              <Table.Cell>
                {format(eventDate, 'MMM D, YYYY (ddd)')}
              </Table.Cell>
            </Table.Row>
          )
        })
        : (<Table.Row>
          <Table.Cell disabled/>
          <Table.Cell disabled>You have no events</Table.Cell>
        </Table.Row>)
    }

    return (
      <Table padded color="teal" selectable basic='very'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell style={inlineStyle.tableCell}>Title</Table.HeaderCell>
            <Table.HeaderCell>Venue</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableBody}
        </Table.Body>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  myEventList: state.Queries.MyEventsList || {}
});

const actions = {
  getMyEventsList
};

export default withRouter(connect(
  mapStateToProps, actions
)(MyEventsTable, 'MyEventsTable'));
