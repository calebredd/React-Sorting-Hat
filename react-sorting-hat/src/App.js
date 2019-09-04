import React, { Component } from "react";
import "./App.scss";
import Footer from "./components/Footer.js";
class App extends Component {
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
        <Footer />
      </div>
    );
  }
}

export default App;
