import React from "react";
import ClickImage from "./ClickImage";
import buttons from "./buttons.json";

// require the images for the buttons
buttons.forEach(button => {
  button.image = require("../assets/images/" + button.image);
})

function shuffleArray(array) {
  console.log(array);
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

// By extending the React.Component class, Counter inherits functionality from it
class Game extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    highScore: 0,
    buttons,
    /*buttons: [
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
        image: kc
      }
    ],*/
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

  scrambleButtons = () => {
    shuffleArray(this.state.buttons);
    return (
      this.state.buttons.map(button => (
      <div className="col text-center">
        <ClickImage
          key={button.id} 
          id={button.id} 
          image={button.image}
          handleImageClick={this.handleImageClick}
        />
      </div>
    )));
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="container">
        <p>Score: {this.state.score}</p>
        <p>High Score: {this.state.highScore}</p>
        <div className="row">
          {this.scrambleButtons()}
        </div>
      </div>
    );
  }
}

export default Game;
