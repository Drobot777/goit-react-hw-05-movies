import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {appiAxiosCredits} from 'appi';
import css from './Cast.module.css';

export const Cast = () => {
  const {movieId} = useParams ();
  const [objCats, setObjCats] = useState ();
  const renderCast = arry => {
    if (!arry || arry.length === 0) {
      return;
    }
    return arry.map ((el, i) => {
      return (
        <li key={i}>
          <img src={`https://image.tmdb.org/t/p/w500${el.profile_path}`} alt={`cast:${el.name}`} width="100" />
          <p className={css.nameTitle}>{el.name}</p>
          <p>
            Character:
            <span className={css.span}>{el.character}</span>
          </p>
        </li>
      );
    });
  };
  useEffect (
    () => {
      const getUser = async () => {
        try {
          const response = await appiAxiosCredits (movieId);
        
          setObjCats ([...response.data.cast]);
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
      <ul>{renderCast (objCats)}</ul>
    </div>
  );
};
