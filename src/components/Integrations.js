import {Grid, Card, Icon, Button, Header} from 'semantic-ui-react';

import AppCard from './AppCard';
import airbnb from '../logos/airbnb.png';
import spotify from '../logos/spotify.png';
import dribbble from '../logos/dribbble.png';
import facebook from '../logos/facebook.png';
import github from '../logos/github.png';
import skype from '../logos/skype.png';
import medium from '../logos/medium.png';
import slack from '../logos/slack.png';
import snapchat from '../logos/snapchat.png';

const Integrations = (props) => {
  return (
    <>
      <Grid>
        <Grid.Column textAlign='left'>
          <Header as='h3'>Integrations</Header>
        </Grid.Column>
        <Grid.Column textAlign='right' floated='right' width={4}>
          <Button color='yellow'>
            <Icon name='plus'/>
            Submit app
          </Button>
        </Grid.Column>
      </Grid>
      <Card.Group itemsPerRow={3}>
        <AppCard image={airbnb} company={'Airbnb'} description={'Your subtitle comes here'}/>
        <AppCard image={spotify} company={'Spotify'} description={'Your subtitle comes here'}/>
        <AppCard image={dribbble} company={'Dribbble'} description={'Your subtitle comes here'}/>
        <AppCard image={facebook} company={'Facebook'} description={'Your subtitle comes here'}/>
        <AppCard image={github} company={'Github'} description={'Your subtitle comes here'}/>
        <AppCard image={skype} company={'Skype'} description={'Your subtitle comes here'}/>
        <AppCard image={medium} company={'Medium'} description={'Your subtitle comes here'}/>
        <AppCard image={slack} company={'Slack'} description={'Your subtitle comes here'}/>
        <AppCard image={snapchat} company={'Snapchat'} description={'Your subtitle comes here'}/>
      </Card.Group>
    </>
  )
}

export default Integrations;
