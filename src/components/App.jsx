import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MyLoader from './loader/loader';

import Navigator from './Navigator/Navigator';
const Home = lazy(() => import('./Pages/Home/Home'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigator />
      <Suspense fallback={MyLoader()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
