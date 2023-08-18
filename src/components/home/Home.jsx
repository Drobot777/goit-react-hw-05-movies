import {useEffect, useState} from 'react';
import css from './Home.module.css';
import {Link} from 'react-router-dom';
import {appiAxiosTrandingDay} from 'appi';

const Home = () => {
  const [object, setObject] = useState ([]);
  const renderMovies = arry => {
    if (arry.length === 0) {
      return;
    }
    return arry.map ((el, index) => {
      return (
        <Link to={`movies/${el.id}`} key={index}>
          <li className={css.list}>{el.title}</li>
        </Link>
      );
    });
  };

  useEffect (() => {
    const getUser = async () => {
      try {
        const response = await appiAxiosTrandingDay ();
        setObject (response.data.results);
      } catch (error) {
        console.error (error);
      }
    };
    getUser ();
  }, []);

  return (
    <ul>
      {renderMovies (object)}

    </ul>
  );
};
export default Home;
