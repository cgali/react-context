import React, { Component } from 'react';
import Text from './components/Text';
import { ColorContext } from "./Context/ColorContext";
import './App.css';

class App extends Component {

  state = {
    colorText: 'blue',
  }

  changeColor = () => {
    this.setState ({
      colorText: this.state.colorText === 'blue' ? 'red' : 'blue',
    })
  }

  render() {
    const { colorText } = this.state;
     return (
       <ColorContext.Provider
        value={{ color: this.state.colorText, changeColor: this.changeColor }}>
          <div className="App">
            <p style={{ textDecoration: "underline", textDecorationColor: colorText }}>HOLA MUNDO PADRE!</p>
            <Text />
          </div>
       </ColorContext.Provider>
    );
  }
}

export default App;
