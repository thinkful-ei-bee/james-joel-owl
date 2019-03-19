import React, { Component } from 'react';
import {participants} from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>{participants[0].name}</p>
      </div>
    );
  }
}

export default App;
