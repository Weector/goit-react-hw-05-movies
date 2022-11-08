import { Navigate, Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Navigator from './Navigator/Navigator';
import Home from './Pages/Home/Home';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import Movies from './Pages/Movies/Movies';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
