import React, { Component } from 'react';
import './participants.css';

class Participant extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    const inSession = this.props.people.filter(person => person.onStage === true);

    const inSessionHtml = inSession.map((person, index) => (
      <div className="Participant-Card" key={index}>
        
        <img src={person.avatar} alt="user avatar"/>
        
        <div className="Participant-Card-Details">

          <div className="">{person.name}</div>
          
          <div className="Participant-Card-Details-Sub-Icons">
            <ul><li>icon</li><li>boot</li></ul>
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