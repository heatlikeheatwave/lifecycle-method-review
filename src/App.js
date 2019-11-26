import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true
    }
  }

  viewNav = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <main>
        <Header />
        <button onClick={this.viewNav}>View Nav</button>
        { this.state.isVisible ? <Nav /> : null}
      </main>
    );
  }
}

export default App;
