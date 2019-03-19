import React, { Component } from 'react';
import {participants} from './store/store';
import Participants from './component/participants/participants';

class App extends Component {
  render() {
    return (
      <main role="main" className="App">
        <Participants people={participants} />
      </main>
    );
  }
}

export default App;
