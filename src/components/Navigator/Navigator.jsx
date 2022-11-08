import { NavLink } from 'react-router-dom';
import css from './navigator.module.css';

const Navigator = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" end className={css.link}>
        Home
      </NavLink>
      <NavLink to="/movies" className={css.link}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigator;
