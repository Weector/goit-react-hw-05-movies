import { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const MovieDetails = () => {
  // const [movie, setMovie] = useState({});

  const navigate = useNavigate();
  const params = useParams();
  console.log('details params', params);
  return (
    <div>
      <h2>Movie Details</h2>
      <button
        type="button"
        onClick={() => {
          navigate('/movies/:movieId/cast');
        }}
      >
        Cast
      </button>
      <button
        type="button"
        onClick={() => {
          navigate('/movies/:movieId/reviews');
        }}
      >
        Reviews
      </button>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
