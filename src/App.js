import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";
import DrumPad from "./components/DrumPad";


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

    let audios, drumPadNames;
    let x = event.key.toUpperCase();

    let ourKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

    const inOurKeys = ourKeys.includes(x);
      if (inOurKeys) {
      audios = document.getElementById(x);

      drumPadNames=  document.getElementById(x).parentNode.id;

      this.setState({
        display: drumPadNames,
        play: !this.state.play },
        () => {
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
    const drumPadName = event.target.id

    this.setState({
      display: drumPadName,
      play: !this.state.play },
      () => {
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

            >
            <DrumPad
                clickIt={this.clickHandler}
                />

              <p> {this.state.display} </p>




        </DrumMachine>


      </div>
    );
  }
}

export default App;
