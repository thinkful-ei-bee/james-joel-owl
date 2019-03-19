import React, { Component } from 'react';

class Participant extends Component {
  render() {
    return (
      <div className="Participants">
        <p>Hi I am a participant!</p>
        <p>Hi I am a participant, and my name is {this.props.people[0].name}</p>
      </div>
    );
  }
}

export default Participant;