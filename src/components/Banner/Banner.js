import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

const Banner = () => {
  const [movie, setMovie] = useState();
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 20) + 1);
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      setMovie(response.data.results[randomNumber]);
    })
  },[randomNumber]);
  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{(movie && movie.title) ? movie.title : 'Title'}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner;
