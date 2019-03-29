import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";


class App extends Component {
  state = {
    play: false
    //pause: true
  }

  url = "https://freesound.org/data/previews/203/203567_3660887-lq.mp3";
  audio = new Audio(this.url);

  clickHandler = () => {
    this.setState({
      play: !this.state.play },
      () => {
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
