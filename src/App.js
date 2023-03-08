import React from 'react';
import axios from 'axios';
import Weather from './Weather';
import './App.css';
import { Next } from 'react-bootstrap/esm/PageItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: '',
      stateInfo: {},
      city_name: '',
      weatherData: []
    }
  }

  handleWeather = async () => {
    try {
      let weatherData = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${this.state.stateInfo.lat}&lon=${this.state.stateInfo.lon}&key=f12d341b0646483cb657f5a82ed15911&units=I&days=3`);
      this.setState({
        weatherData: weatherData.data
      })
      console.log(weatherData.data)
    } catch (error) {
      Next(error);
    }
  }

  weatherInput = (e) => {
    this.setState({
      city_name: e.target.value
    })
  }

  locationHandler = (e) => {
    this.setState({
      stateData: e.target.value
    });

  }

  // mapHandler = (e) => {
  //   this.setState({
  //     stateData: e.target.value
  //   });

  // }

  eventLocation = async (e) => {
    e.preventDefault();
    let location = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.stateData}&format=json`);
    this.setState({
      stateInfo: location.data[0]
    }, this.handleWeather);
    // console.log(location);
  }


  // eventMap = async (e) => {
  //   e.preventDefault();
  //   let location = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=pk.${process.env.REACT_APP_CITY_KEY}&center=47.4810022,-122.459696&zoom=10`);
  //   this.setState({
  //     stateInfo: location.data[0]
  //   });
  //   console.log(location)
  // }



  render() {

    let mapUrl = (`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.stateInfo.lat},${this.state.stateInfo.lon}&zoom=10`);

    // let cityData = this.state.stateInfo.map((sData, idx) => {

    //   return <li ket={idx}></li>
    // })

    return (
      <>
        <h1>City Explorer</h1>
        <form>
          <label>City Name
            <input type="text"
              onChange={this.locationHandler}
              onInput={this.weatherInput}
            ></input>
          </label>
          <button
            onClick={this.eventLocation}
            onSubmit={this.handleWeather}
          >Explore</button>
        </form>
        <ul>
          <Weather weatherData={this.state.weatherData} />
          <li>{this.state.stateInfo.display_name}</li>
          <li>{this.state.stateInfo.lat}</li>
          <li>{this.state.stateInfo.lon}</li>
          <img src={mapUrl} alt='map'></img>
        </ul>
      </>
    );
  }
}

export default App;

// import React from 'react';
// import axios from 'axios';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       searchQuery:'',
//       location: {}
//     }
//   }

//   getLocation = async () => {
    // const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;
//     const res = await axios.get(API);
//     console.log(res.data[0])
//     this.setState({ location:res.data[0] });
//   }

//   render() {
//     return(
//       <>
//         <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
//         <button onClick={this.getLocation}>Explore!</button>
//           <h2>{this.state.location.display_name}</h2>
//       </>
//     )
//   }
// }

// export default App;
