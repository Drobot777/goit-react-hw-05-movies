import {useEffect, useState} from 'react';
import {Link, useParams, useNavigate, Routes, Route} from 'react-router-dom';
import {Cast} from 'components/cast/Cast';
import {Reviews} from 'components/rewiers/Review';
import {appiAxiosMovieID} from 'appi';
import {nanoid} from 'nanoid';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const {movieId} = useParams ();
  const [movie, setMovie] = useState ();
  const navigate = useNavigate ();

  const rendersMovie = arry => {
    if (arry.length === 0 || !arry) {
      return;
    }
    return arry.map (el => {
      const date = new Date (el.release_date);
      return (
        <div key={nanoid ()}>
          <div className={css.wrraper}>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              alt={el.tagline}
              className={css.icon}
            />
            <div>
              <h1>
                {el.title}({date.getFullYear ()}
                )
              </h1>
              <p> User Score:{el.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{el.overview}</p>
              <h3>Genres</h3>
              {el.genres.map ((el, i) => (
                <span key={i} className={css.span}>{el.name}</span>
              ))}
            </div>
          </div>
          <div className={css.container}>
            <p>Additional information</p>
            <ul>
              <li key={nanoid ()}>
                <Link to="cast" className={css.castLink}>Cast</Link>
              </li>
              <li key={nanoid ()}>
                <Link to="reviews" className={css.castLink}>Reviews</Link>
              </li>
            </ul>

          </div>
        </div>
      );
    });
  };

  useEffect (
    () => {
      const getUser = async () => {
        try {
          const response = await appiAxiosMovieID (movieId);

          setMovie ([response.data]);
        } catch (error) {
          console.error (error);
        }
      };
      getUser ();
    },
    [movieId]
  );

  return (
    <div>
      <button
        type="button"
        onClick={() => navigate (-1)}
        className={css.homeLink}
      >
        Go back
      </button>
      {movie && rendersMovie (movie)}
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};
export default MovieDetails;
