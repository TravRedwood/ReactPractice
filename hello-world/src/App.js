import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Trav Counter</h1>
        <button onClick={this.increase} className="counter">
          +
        </button>
        <button onClick={this.decrease} className="counter">
          -
        </button>
        <h2> {this.state.count}</h2>
      </div>
    );
  }
}

export default App;
