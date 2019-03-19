import React, { Component } from 'react';
import {participants} from './store/store';
import Participants from './component/participants/participants';
import Stage from './component/stage/stage';
import './App.css';

class App extends Component {
  render() {
    return (
      <main role="main" className="App">
        <Participants people={participants} />
        <Stage people={participants} />
      </main>
    );
  }
}

export default App;
