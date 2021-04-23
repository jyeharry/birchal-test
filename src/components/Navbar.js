import {Container, Menu, Button, Icon} from 'semantic-ui-react';

const Navbar = (props) => {

  return (
    <Menu className='borderless' size='huge'>
      <Menu.Item name='overview'>
        <Button>Logo</Button>
      </Menu.Item>
      <Container>
        <Menu.Item name='overview' link/>
        <Menu.Item name='Landings' link/>
        <Menu.Item name='pages' link/>
        <Menu.Item name='app' link/>
        <Menu.Item name='docs' link/>
      </Container>
      <Menu.Menu position='right'>
        <Menu.Item link>
          <Icon name='search'/>
        </Menu.Item>
        <Menu.Item link>
          <Icon name='cog'/>
        </Menu.Item>
        <Menu.Item link>
          <Icon name='bell'/>
        </Menu.Item>
        <Menu.Item link>
          <Icon size='big' name='user'/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar;
