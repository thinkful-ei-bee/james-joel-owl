import React, { Component } from 'react';
import Participants from './participants/participants';

import './sidebar.css';

class Sidebar extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    // const inSession = this.props.people.filter(person => person.onStage === true);

    return (
      <div className="sidebar">
        <Participants people={this.props.people} />
      </div>
    );
  }
}

export default Sidebar;