import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";


class App extends Component {
  state = {
    play: false
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler)
  }


  keydownHandler = (event) => {

    let values, audios;
    let x = event.key;

    let ourKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C", "q",
          "w", "e", "a", "s", "d", "z", "x", "c"];

    const inOurKeys = ourKeys.includes(x);
      if (inOurKeys) {
        x = x.toUpperCase();
      audios = document.getElementById(x);
      values = document.getElementById(x).getAttribute("src");

      this.setState({
        play: !this.state.play },
        () => {
          audios.src = values;
          audios.play();
          audios.currentTime = 0;
      });
    } else {
      this.setState({
        play: this.state.play,
      });
    }

  }


  clickHandler = (event) => {
    const audio = document.getElementById(event.target.id)
                  .getElementsByTagName("AUDIO")[0]


    const value = document.getElementById(event.target.id)
                      .getElementsByTagName("AUDIO")[0]
                          .getAttribute("src")

    const drumPadName = document.getElementById(event.target.id)
                            .getAttribute("id")
    console.log(drumPadName)

    this.setState({
      display: drumPadName,
      play: !this.state.play },
      () => {
        audio.src = value;
        audio.play();
        audio.currentTime = 0;
    },

  );
  }

  render() {
    return (
      <div className="App"
          >

          <DrumMachine
              clickIt={this.clickHandler}

            >
            <p> {this.state.display} </p>

        </DrumMachine>


      </div>
    );
  }
}

export default App;
