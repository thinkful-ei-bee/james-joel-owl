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

    let clicked = '';

    return (
      <div className="sidebar">
        <ul>
          <li><button className="link-button" onClick={clicked='chat'}>Chat</button></li>
          <li><button className="link-button" onClick={clicked='participants'}>Participants</button></li>
          <li><button className="link-button" onClick={clicked='settings'}><img src={settings} buttonlt="settings" alt="icon" /></button></li>
          <li><button className="link-button" onClick={clicked='link'}><img src={link} buttonlt="link" alt="icon" /></button></li>
          <li><button className="link-button" onClick={clicked='help'}><img src={help} buttonlt="help" alt="icon" /></button></li>
        </ul>
        <Participants people={this.props.people} />
      </div>
    );
  }
}

export default Sidebar;