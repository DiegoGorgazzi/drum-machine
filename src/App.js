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

    let x = event.key;

    if (x === "q" || x === "Q") {
      x = "Q";
  }

    console.log(event.key);

    const audio = document.getElementById(x)
                  //.getElementsByTagName("AUDIO")[0]

    const value = document.getElementById(x).getAttribute("src")
                      //.getElementsByTagName("AUDIO")[0]
                          //.getAttribute("src")

    this.setState({
      play: !this.state.play },
      () => {
        audio.src = value;
        audio.play();
        audio.currentTime = 0;
    });

  }


  clickHandler = (event) => {
    const audio = document.getElementById(event.target.id)
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
      <div className="App"
          >

          <DrumMachine
              clickIt={this.clickHandler}
              keyPressed ={this.keydownHandler}
            />




      </div>
    );
  }
}

export default App;
