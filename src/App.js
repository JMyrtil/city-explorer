import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: ''
    }
  }


  eventHandler = (e) => {
    e.preventDefault();
    axios.get()
  }

  eventSubmit = (e) => {

  }


  render() {

    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.eventHandler}>
          <button>Explore</button>
        </form>
      </>
    );
  }
}

export default App;
