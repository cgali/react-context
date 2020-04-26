import React, { Component } from 'react';
import { ColorContext } from '../Context/ColorContext';


class TextChild extends Component {
  render() {
    return(
      <ColorContext.Consumer>
        {({ color, changeColor }) => (
          <div className="text-child">
            <p style={{ color: color }}>hola mini mundo!</p>
            <button style={{ color: color }} onClick={changeColor}>
              Change color to <strong style={{ fontSize: "1rem" }}>{ color }</strong>
            </button>
          </div>
          
        )}
        
      </ColorContext.Consumer> 
    );
  }
}

export default TextChild;