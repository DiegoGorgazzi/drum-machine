import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";


class App extends Component {
  state = {
    play: false
  }

  clickHandler = (event) => {
    let audio = document.getElementById(event.target.id)
                  .getElementsByTagName("AUDIO")[0]


    const value = document.getElementById(event.target.id)
                      .getElementsByTagName("AUDIO")[0]
                          .getAttribute("src")

    this.setState({
      play: !this.state.play },
      () => {
        audio.src = value;
        audio.play();
        audio.currentTime = 0;
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
