import React, { Component } from 'react';
import Participants from './participants/participants';
import './sidebar.css';
import settings from './img/icon-settings.png';
import link from './img/icon-link.png';
import help from './img/icon-help.png';

class Sidebar extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    // const inSession = this.props.people.filter(person => person.onStage === true);

    return (
      <div className="sidebar">
        <ul>
          <li>Chat</li>
          <li>Participants</li>
          <li><img src={settings} /></li>
          <li><img src={link} /></li>
          <li><img src={help} /></li>
        </ul>
        <Participants people={this.props.people} />
      </div>
    );
  }
}

export default Sidebar;