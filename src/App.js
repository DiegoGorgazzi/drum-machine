import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";
import DrumPad from "./components/DrumPad";
import {drumPadList} from "./shared/drumPadList";

class App extends Component {
  state = {
    keyPressed: "",
    keyDownPressed: false,
    display: "",
    play: false
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keydownHandler);
    document.addEventListener("keyup", this.keyupHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownHandler);
    document.addEventListener("keyup", this.keyupHandler);
  }


  keyupHandler = () => {
    this.setState({
      keyDownPressed: false
   });
  }


  keydownHandler = (event) => {

    let audios, drumPadNames;
    const x = event.key.toUpperCase();
    const ourKeys = [];

    drumPadList.map((item) =>
        { return ourKeys.push(item.audioIdKey)}
      );

    const inOurKeys = ourKeys.includes(x);
    if (inOurKeys) {
        audios = document.getElementById(x);
        drumPadNames=  document.getElementById(x).parentNode.id;

        this.setState({
              keyDownPressed: true,
              keyPressed: x,
              display: drumPadNames,
              play: !this.state.play },
              () => {
                audios.play();
                audios.currentTime = 0;
              }
            );

    } else {
        this.setState({
          play: this.state.play
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
      }
    );
  }

  render() {

    //Conditional styling on keydown and keyup
    let stylish;
    if(this.state.keyDownPressed) {
      stylish = {
          backgroundColor: "#0033cc",
          boxShadow: "0 5px #666",
          transform: "translateY(4px)",
      };
    }


    return (
      <div className="App">

        <DrumMachine>
            <DrumPad
                clickIt={this.clickHandler}
                styleIt={stylish}
                myValue = {this.state.keyPressed}
                />
              <div className="drum-name">
              <p> {this.state.display} </p>
            </div>
        </DrumMachine>


      </div>
    );
  }
}

export default App;
