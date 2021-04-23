import './App.css';

import {Container, Grid} from 'semantic-ui-react';

import Navbar from './components/Navbar';
import VerticalNav from './components/VerticalNav';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={3}>
          <VerticalNav/>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
