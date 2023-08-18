import {NavLink, Route, Routes} from 'react-router-dom';
import {lazy, Suspense} from 'react';
import css from './app.module.css';
const Home = lazy (() => import ('./home/Home'));
const NotFaund = lazy (() => import ('./notFaund/NotFaund'));
const MovieDetails = lazy (() => import ('./movieDetails/MovieDetails'));
const Movies = lazy (() => import ('./movies/Movies'));

export const App = () => {
  return (
    <div>
      <header className={css.heder}>
        <nav>
          <NavLink
            to="/"
            className={({isActive}) => (isActive ? css.activNav : css.home)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({isActive}) => (isActive ? css.activNav : css.home)}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFaund />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
