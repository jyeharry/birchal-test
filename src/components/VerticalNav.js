import {Container, List, Menu} from 'semantic-ui-react';

const Navbar = (props) => {

  return (
  <Container textAlign='left'>
    <Menu secondary vertical>
      <Menu.Header as='h3'>Categories</Menu.Header>
      <Menu.Item as='h4' link>Accounting</Menu.Item>
      <Menu.Item as='h4' link>Communication</Menu.Item>
      <Menu.Item as='h4' link>Finance</Menu.Item>
      <Menu.Item as='h4' link>CRM and Sales</Menu.Item>
      <Menu.Item as='h4' link>Customer Support</Menu.Item>
      <Menu.Item as='h4' link>Design and Creativity</Menu.Item>
      <Menu.Item as='h4' link>E-commerce and Shopping</Menu.Item>
      <Menu.Item as='h4' link>File sharing</Menu.Item>
      <Menu.Item as='h4' link>Developer tools</Menu.Item>
      <Menu.Item as='h4' link>Legal and HR</Menu.Item>
      <Menu.Item as='h4' link>Marketing and Analytics</Menu.Item>
      <Menu.Item as='h4' link>Music and Art</Menu.Item>
      <Menu.Item as='h4' link>Video and Entertainment</Menu.Item>
      <Menu.Item as='h4' link>News and Politics</Menu.Item>
    </Menu>
  </Container>
  )
}

export default Navbar;
