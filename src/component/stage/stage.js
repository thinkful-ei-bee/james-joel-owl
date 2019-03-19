import React, { Component } from 'react';
import './stage.css';
import search from './img/icon-search.png';
import speaker from './img/icon-speaker.png';

class Stage extends Component {

  static defaultProps = {
    // only if you know this has to be customizable
  }  

  render() {

    const onStage = this.props.people.filter(person => person.onStage === true);

    const onStageTopHtml = onStage.map((person, index) => {
      if(index <= 1) {
        return (
          <div className="Stage-Card" key={index}>
            <div className="Stage-Person">

              <div className="Stage-Name-Box">

                <p>{person.name}</p>
                
                <hr />

                <ul>
                  <i><img className="Stage-Name-Box-Icon" src={speaker} alt="speaker" /></i>
                  <i><img className="Stage-Name-Box-Icon" src={search} alt="search" /></i>
                </ul>

              </div>

              <img src={person.avatar} alt="user stage avatar"></img>
          
            </div>
          </div>)
      }
      else { return '' }

    });

    const onStageBottomHtml = onStage.map((person, index) => {
      if(index >= 2) {
        return (
          <div className="Stage-Card" key={index}>
            <div className="Stage-Person">

              <div className="Stage-Name-Box">
                
                <hr />

                <img src={person.avatar} alt="user stage avatar"></img>

              </div>

            </div>
          </div>)
      }
      else { return '' }
      

    });

    return (
      <div className="Stage">
        <div className="stage-top">
          {onStageTopHtml}
        </div>
        <div className="stage-bottom">
          {onStageBottomHtml}
        </div>
      </div>
    );
  }
}

export default Stage;