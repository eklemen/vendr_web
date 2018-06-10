import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Header, Dropdown, Icon, Grid} from 'semantic-ui-react';

const Navbar = (props) => {
  const inlineStyles = {
    container: {marginTop: '0'},
    menu: {width: '100%'}
  };
  return (
    <Grid container style={inlineStyles.container}>
    <Menu secondary size='massive' style={inlineStyles.menu}>
      <Menu.Item name='browse' onClick={() => {
      }} header>
        <Header as='h2'>VendorFriender</Header>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Dropdown item icon={<Icon fitted size='large' color='teal' name='user'/>}>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to='/dashboard'>Dashboard</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/dashboard'>Contacts</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='/logout'>Logout</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    </Grid>
  )
};

export default Navbar;
