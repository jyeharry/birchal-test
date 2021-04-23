import {Container, Menu, Button, Icon, Divider} from 'semantic-ui-react';

const Navbar = (props) => {

  return (
    <Menu className='borderless' size='huge'>
      <Menu.Item name='overview'>
        <Button>Logo</Button>
      </Menu.Item>
      <Container>
        <Menu.Item name='overview'/>
        <Menu.Item name='Landings'/>
        <Menu.Item name='pages'/>
        <Menu.Item name='app'/>
        <Menu.Item name='docs'/>
      </Container>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Icon name='search'/>
        </Menu.Item>
        <Menu.Item>
          <Icon name='cog'/>
        </Menu.Item>
        <Menu.Item>
          <Icon name='bell'/>
        </Menu.Item>
        <Menu.Item>
          <Icon size='big' name='user'/>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar;
