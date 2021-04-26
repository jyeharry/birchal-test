import {Icon, Button, Header} from 'semantic-ui-react';
import {useState} from 'react';

const InstallButton = (props) => {
  const [installed, setInstalled] = useState(false)

  const installBtn = (
    <Button basic onClick={() => setInstalled(!installed)}>
      <Icon name='plus'/>
      Install
    </Button>
  );

  const installedBtn = (
    <>
      <Icon inverted circular name='check' color='green' className={'inline-block'}/>
      <Header as='h4' color='green' className={'inline-block'}>Installed</Header>
    </>
  );

  return installed ? installedBtn : installBtn;
}

export default InstallButton;
