import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ashish",
    };
  }
  changeName = () => {
    this.setState(
      (state, props) => {
        return { name: "singh" };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button onClick={this.changeName}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
