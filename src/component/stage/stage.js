import React, { Component } from 'react';
import './stage.css';

class Stage extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    const onStage = this.props.people.filter(person => person.onStage === true);

    const onStageHtml = onStage.map((person, index) => (
    
      <div className="Stage-Card" key={index}>
        <div className="Stage-Person">
          <div className="Stage-Name-Box">
            <div>
              <p>{person.name}</p>
            </div>
            <div className="Stage-Name-Box-Details">
              <hr></hr>
            </div>
          </div>
          
        </div>
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