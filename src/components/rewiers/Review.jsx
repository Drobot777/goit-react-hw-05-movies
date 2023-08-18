import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {appiAxiosReviews} from 'appi';
import css from './Review.module.css';

export const Reviews = () => {
  const {movieId} = useParams ();
  const [reviews, setReviews] = useState ([]);
  const renderReviews = arry => {
    if (!arry || arry.length === 0) {
      return;
    }
    return arry.map ((el, i) => {
      return (
        <li key={i}>
          <p className={css.author}>
            Author:<span className={css.span}>{el.author}</span>
          </p>
          <p>{el.content}</p>
        </li>
      );
    });
  };
  useEffect (
    () => {
      const getUser = async () => {
        try {
          const response = await appiAxiosReviews (movieId);

          setReviews ([...response.data.results]);
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
      {reviews.length === 0
        ? <p>We dont have any reviews for this movie</p>
        : <ul>{renderReviews (reviews)}</ul>}

    </div>
  );
};
