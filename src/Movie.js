import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap';

class Movie extends React.Component {

  render() {

    console.log(this.props.movieInfo);

    return (
      

      this.props.movieInfo.map((movie, idx) => (
        <>
            <Carousel>
              < Carousel.Item key={idx}>
                <img
                  className="carpic"
                  src={movie.imageurl}
                  alt={''.alt}
                />
              </Carousel.Item >
            </Carousel>
        </>
      ))
    );
  }
}


export default Movie;
