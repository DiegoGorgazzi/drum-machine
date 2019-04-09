import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";


class App extends Component {
  state = {
    display: "",
    play: false
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler)
  }


  keydownHandler = (event) => {

    let values, audios, drumPadName;
    let x = event.key;

    let ourKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C", "q",
          "w", "e", "a", "s", "d", "z", "x", "c"];

    const inOurKeys = ourKeys.includes(x);
      if (inOurKeys) {
        x = x.toUpperCase();
      audios = document.getElementById(x);
      values = document.getElementById(x).getAttribute("src");

      drumPadName=  document.getElementById(x).parentNode.id;

      this.setState({
        display: drumPadName,
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
    const audio = event.target.firstElementChild
    const value = event.target.firstElementChild.src
    const drumPadName = event.target.id  

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
