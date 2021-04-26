import './App.css';

import {Grid} from 'semantic-ui-react';

import Navbar from './components/Navbar';
import VerticalNav from './components/VerticalNav';
import Integrations from './components/Integrations';

// an empty Grid.Column is used to add padding to the side of the screen
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <Grid>
        <Grid.Column width={2}/>
        <Grid.Column width={3}>
          <VerticalNav/>
        </Grid.Column>
        <Grid.Column width={9}>
          <Integrations/>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
