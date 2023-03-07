import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: '',
      stateInfo: {}
    }
  }


  eventHandler = (e) => {
    this.setState({
      stateData: e.target.value
    });

  }

  eventSubmit = async (e) => {
    e.preventDefault();
    let location = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.stateData}&format=json`);
    this.setState({
      stateInfo: location.data[0]
    });
    console.log(location)
  }


  render() {


    // let cityData = this.state.stateInfo.map((sData, idx) => {

    //   return <li ket={idx}></li>
    // })

    return (
      <>
        <h1>City Explorer</h1>
        <form>
          <label>City Name
            <input type="text" onChange={this.eventHandler}></input>
          </label>
          <button onClick={this.eventSubmit}>Explore</button>
        </form>
        <ul>
          <li>{this.state.stateInfo.display_name}</li>
          <li>{this.state.stateInfo.lat}</li>
          <li>{this.state.stateInfo.lon}</li>
        </ul>
      </>
    );
  }
}

export default App;