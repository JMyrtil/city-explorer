import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel'

class Movie extends React.Component {

  render() {

    // console.log(this.props.movieInfo.map);


    let carItems = this.props.movieInfo.map((movie, idx) => {
      let moveImg = `https://image.tmdb.org/t/p/w500${movie.imageurl}`

      return (

        <Carousel.Item key={idx}>
          <img
            className="carpic"
            src={moveImg}
            alt={''.alt}
          />
        </Carousel.Item>

      )
    })

    return (

      <>
        <Carousel>
          {carItems}
        </Carousel>
      </>
    );
  }
}


export default Movie;
