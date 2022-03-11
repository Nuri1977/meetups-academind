import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

export default function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  if(favoriteCtx.totalFavorites === 0) {
    return (
    <div>
      <h1>My Favorites</h1>
      <p>There are no favorites</p>
    </div>
    )
  }

  return (
    <div>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteCtx.favorites}/>
    </div>
  );
}
