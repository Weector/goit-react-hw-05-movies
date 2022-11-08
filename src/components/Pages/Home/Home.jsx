import moviesTrends from 'components/API/moviesTrends';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    moviesTrends().then(data => setMovies(data.results));
  }, []);

  // console.log(movies);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies?.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
