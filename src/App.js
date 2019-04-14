import React, { Component } from 'react';
import './App.css';
import DrumMachine from "./components/DrumMachine";
import DrumPad from "./components/DrumPad";
import {drumPadList} from "./shared/drumPadList";

class App extends Component {
  state = {
    myStyle: {},
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
        { return ourKeys.push(item.audioIdKey);
        }
      );

    const inOurKeys = ourKeys.includes(x);
      if (inOurKeys) {
        audios = document.getElementById(x);
        drumPadNames=  document.getElementById(x).parentNode.id;

        this.setState({
              keyDownPressed: true,
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

  let stylish;

    console.log(this.state.keyDownPressed, " inside render")

    if(this.state.keyDownPressed) {
      stylish = {
          backgroundColor: "#3e8e41",
          boxShadow: "0 5px #666",
          transform: "translateY(4px)",
      };
    }


    return (
      <div className="App"
          >

        <DrumMachine

            >
            <DrumPad
                clickIt={this.clickHandler}
                styleIt={stylish}
                />
              <p> {this.state.display} </p>




        </DrumMachine>


      </div>
    );
  }
}

export default App;
