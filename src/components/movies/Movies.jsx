import {useState, useEffect} from 'react';
import css from './Movies.module.css';
import {Link, useSearchParams} from 'react-router-dom';
import {appiAxiosSearchMovie} from 'appi';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams ();
  const usname = searchParams.get ('query');
  const [objectMovies, setObjectMovies] = useState ([]);

  const handleSubmit = e => {
    e.preventDefault ();
    const form = e.currentTarget;

    setSearchParams ({query: form.elements.query.value});
  };

  const renderSearchMovies = arry => {
    if (!arry || arry.length === 0) {
      return;
    }
    return arry.map ((el, i) => {
      return (
        <li key={i}>
          <Link to={`/movies/${el.id}`} className={css.link}>
            {el.original_title}
          </Link>
        </li>
      );
    });
  };
  useEffect (
    () => {
      if (!usname) {
        return;
      }
      const getUser = async () => {
        try {
          const response = await appiAxiosSearchMovie (usname);

          setObjectMovies (response.data.results);
        } catch (error) {
          console.error (error);
        }
      };
      getUser ();
    },
    [usname]
  );

  return (
    <div>
      <div className={css.searchbar}>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            name="query"
            defaultValue={usname}
          />
        </form>
      </div>
      {Array.isArray (objectMovies) && objectMovies.length === 0
        ? null
        : <ul>{renderSearchMovies (objectMovies)}</ul>}

    </div>
  );
};
export default Movies;
