import React, { Component } from 'react';
import './participants.css';

class Participant extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    const inSession = this.props.people.filter(person => person.inSession === true);
    const notInSession = this.props.people.filter(person => person.inSession === false);

    const inSessionHtml = inSession.map((person, index) => (
      <div className="Participant-Card" key={index}>
        
        <img src={person.avatar} alt="user avatar"/>
        
        <div className="Participant-Card-Name">{person.name}</div>
        
        <div className="Participant-Card-Details">
          {/* Determin if person is on stage or not */}
          <div className="Participant-Card-Stage">
            {person.onStage ? 'on stage' : ''}
            <a href="#">Boot</a>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="Participants">
        {inSessionHtml}
      </div>
    );
  }
}

export default Participant;