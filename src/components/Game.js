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
    count: 0,
    images: [tg, tr, tg, tr, tg, tr, tg, tr, tg, tr, tg, tr]
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.images.map(image => (
            <div className="col text-center">
              <ClickImage
                image={image}
                handleImageClick={this.handleIncrement}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
