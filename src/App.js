import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";


class App extends Component {
  state = {
    play: false
  }

  audio = new Audio();

  clickHandler = (event) => {
    const value  = event.target.value;

    this.setState({
      play: !this.state.play },
      () => {
        this.audio.src = value;
        this.audio.play();
        this.audio.currentTime = 0;
    });
  }


  render() {
    return (
      <div className="App">

          <DrumMachine
              clickIt={this.clickHandler}
            />


      </div>
    );
  }
}

export default App;
