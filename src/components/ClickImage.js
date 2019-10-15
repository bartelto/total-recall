import React from "react";

let divStyle = (imgUrl) => {
  return { backgroundImage: `url(${imgUrl})` };
  //return { backgroundImage: `url("./terminator-genisys.jpg")` };
};

function ClickImage(props) {
  return (
    <div className="click-image"
      style={divStyle(props.image)}
      /*onClick={props.handleImageClick}*/ >
    </div>
  );
}

export default ClickImage;
