import {Card, Icon, Image} from 'semantic-ui-react';

import InstallButton from './InstallButton';

const AppCard = (props) => {
  const {image, company, description} = props

  return (
    <Card raised>
      <Card.Content textAlign='right'>
        <Icon name='sync alternate' flipped='horizontally'/>
        <Icon name='ellipsis horizontal'/>
      </Card.Content>
      <Card.Content>
        <Image src={image} size='small' floated='left'/>
        <InstallButton/>
      </Card.Content>
      <Card.Content textAlign='left'>
        <Card.Header>{company}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default AppCard;
