import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Metups</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetups</Link>
          </li>
          <li>
            <Link to='/favorites'>
              Favorites
              <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
);
}
