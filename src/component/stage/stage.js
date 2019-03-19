import React, { Component } from 'react';
import './stage.css';

class Stage extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    const onStage = this.props.people.filter(person => person.onStage === true);

    const onStageHtml = onStage.map((person, index) => (
      
      <div className="Stage-Personkey" key={index}>
      hi
      </div>
      
    ));

    return (
      <div className="Stage">
        {onStageHtml}
      </div>
    );
  }
}

export default Stage;