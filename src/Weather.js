import React from 'react';
import './App.css';

class Weather extends React.Component {

  render() {
    console.log(this.props.weatherData.data)
    return (

      this.props.weatherData.forEach((day, idx) => (
        <>
          <div key={idx}>
            <li>{day.date}</li>
            <li>{day.description}</li>
          </div>
        </>
      ))
    );
  }
}

export default Weather;
