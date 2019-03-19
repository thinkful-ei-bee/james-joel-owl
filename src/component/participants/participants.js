import React, { Component } from 'react';
import './participants.css';

class Participant extends Component {
  render() {

    const inSession = this.props.people.filter(person => person.inSession === true);
    const notInSession = this.props.people.filter(person => person.inSession === false);

    const inSessionHtml = inSession.map((person, index) => (
      <div className="Participant-Card" key={index}>
        <img src={person.avatar} />
      </div>
    ))

    return (
      <div className="Participants">
        {inSessionHtml}
      </div>
    );
  }
}

export default Participant;