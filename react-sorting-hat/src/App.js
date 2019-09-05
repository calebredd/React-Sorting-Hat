import React, { Component } from "react";
import "./App.scss";
import Footer from "./components/Footer.js";
import Houses from "./components/Houses.js";
class App extends Component {
  constructor() {
    super();
    this.state = {
      houses: [
        {
          id: 1,
          house: "Gryffindor",
          founder: "Godric Gryffindor",
          mascot: "lion",
          traits: "brave",
          common: "Gryffindor Tower",
          colors: ["scarlet", "red"],
          count: 0
        },
        {
          id: 2,
          house: "Hufflepuff",
          founder: "Helga Hufflepuff",
          mascot: "Badger",
          traits: "Loyal",
          common: "Hufflepuff Basement",
          colors: ["yellow", "black"],
          count: 0
        },
        {
          id: 3,
          house: "Ravenclaw",
          founder: "Rowena Ravenclaw",
          mascot: "Eagle",
          traits: "Wise",
          common: "Ravenclaw Tower",
          colors: ["blue", "bronze"],
          count: 0
        },
        {
          id: 4,
          house: "Slytherin",
          founder: "Salazar Slytherin",
          mascot: "Snake",
          traits: "Cunning",
          common: "Slytherin Dungeon",
          colors: ["green", "silver"],
          count: 0
        }
      ]
    };
  }
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="App-title">Welcome to Hogwarts!</h1>
          <img
            className="logo"
            src="https://i.pinimg.com/originals/e5/41/d2/e541d2f8d9bf187dd57a76ab74899051.gif"
            alt="Hogwarts Emblem"
          />
          <h2>You're a wizard, Harry</h2>
        </header>
        <div className="hat">
          <button className="hatButton">Find your House!</button>
          <br />
          <img
            className="hatImg"
            src="https://images.immediate.co.uk/production/volatile/sites/3/2016/06/53243.jpg?quality=90&resize=620,413"
            alt="Sorting Hat"
          />
        </div>
        <Footer state={this.state}/>
        {/* <Houses state={this.state} /> */}
      </div>
    );
  }
}

export default App;
