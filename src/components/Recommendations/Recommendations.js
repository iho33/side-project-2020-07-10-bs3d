import React from 'react';
import './Recommendations.scss';

export default function Recommendations(props) {
  let movieList = props.recommendedMovies;

  const movieMap = movieList.map((movie) =>
    <div className="recommendations__item-container">
      <img src={movie.image} alt="Movie poster" className="recommendations__item-image"></img>
      <h2 className="recommendations__item-name">{movie.name}</h2>
      <p className="recommendations__item-runtime">Runtime: {movieRuntime(movie.runtime)}</p>
    </div>
  );

  return (
    <>
      <section className="recommendations">
        {movieMap}
      </section>
    </>
  );
}

function movieRuntime(timeInMinutes) {
  let hours = Math.floor(timeInMinutes / 60);
  let minutes = timeInMinutes - (hours * 60);
  let hoursString = '';
  let minutesString = '';

  if (hours === 1 && minutes === 1) {
    hoursString = `1 hour`;
    minutesString = '1 minute'
  }

  else if (hours === 1 && minutes !== 1) {
    hoursString = '1 hour';
    minutesString = `${minutes} minutes`;
  }

  else if (minutes === 1 && hours !== 1) {
    hoursString = `${hours} hours`;
    minutesString = '1 minute'
  }

  else {
    hoursString = `${hours} hours`;
    minutesString = `${minutes} minutes`;
  }

  return `${hoursString}, ${minutesString}`
}