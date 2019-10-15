import React from "react";
import ClickImage from "./ClickImage";
//import tg from "./terminator-genisys.jpg";
const tg = require('../assets/images/terminator-genisys.jpg');
const tr = require('../assets/images/total-recall.png');

console.log(tg);

// By extending the React.Component class, Counter inherits functionality from it
class Game extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    highScore: 0,
    buttons: [
      {
        id: 1,
        image: tg
      }, 
      {
        id: 2,
        image: tr
      }, 
      {
        id: 3,
        image: tg
      }, 
      {
        id: 4,
        image: tr
      }, 
      {
        id: 5,
        image: tg
      }, 
      {
        id: 6,
        image: tr
      }, 
      {
        id: 7,
        image: tg
      }, 
      {
        id: 8,
        image: tr
      }, 
      {
        id: 9,
        image: tg
      }, 
      {
        id: 10,
        image: tr
      }, 
      {
        id: 11,
        image: tg
      }, 
      {
        id: 12,
        image: tr
      }
    ],
    unclickedIds: [] // or perhaps use image URLs?
  };

  // handleImageClick increases this.state.count by 1
  handleImageClick = (id) => {
    console.log(`clicked id ${id}`);
    
    if (!this.state.unclickedIds.includes(id)) {
      // button had not been clicked before
      this.state.unclickedIds.push(id);
      this.setState({ score: this.state.score + 1 });
      if (this.state.score >= this.state.highScore) {
        // new high score
        this.setState({ highScore: this.state.score + 1 });
      }
    }
    else {
      // button has already been clicked
      this.setState({ 
        score: 0, 
        unclickedIds: [] 
      });
    }
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="container">
        <p>Score: {this.state.score}</p>
        <p>High Score: {this.state.highScore}</p>
        <div className="row">
          {this.state.buttons.map(button => (
            <div className="col text-center">
              <ClickImage
                key={button.id} 
                id={button.id} 
                image={button.image}
                handleImageClick={this.handleImageClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
