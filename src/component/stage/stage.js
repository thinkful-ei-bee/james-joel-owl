import React, { Component } from 'react';
import './stage.css';

class Stage extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    const onStage = this.props.people.filter(person => person.inSession === true);

    const onStageHtml = something.map((person, index) => (
      <div className="Stage" key={index}>
        
        
      </div>
    ));

    return (
      <div className="Participants">
        {onStageHtml}
      </div>
    );
  }
}

export default Stage;