import React, { Component } from 'react';
import {participants} from './store/store';
import Participants from './component/participants/participants';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Participants people={participants} />
      </div>
    );
  }
}

export default App;
