import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { moviesInfo } from 'components/API/moviesFetch';
import { Spinner } from 'components/loader/spinner';
import { Button, ButtonBack, Container } from './movieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';

  useEffect(() => {
    moviesInfo(params.movieId).then(setDetails);
  }, [params]);

  const movieRating = Math.round(details.vote_average * 10);

  return (
    <div>
      <ButtonBack to={backLinkHref}>Back</ButtonBack>
      {!details.id ? (
        <Spinner />
      ) : (
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
            alt={details.title}
            width="320"
            height="500"
          />

          <div>
            <h2>{details.title}</h2>
            <span>Rating: {movieRating}%</span>
            <h3>Overview</h3>
            <p>{details.overview}</p>
            <h4>Genres</h4>
            <ul>
              {details?.genres?.map(({ name, id }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <div>
              <h3>More info:</h3>
              <Button
                type="button"
                onClick={() => {
                  navigate(`cast`, { state: { from: location.state?.from } });
                }}
              >
                Cast
              </Button>
              <Button
                type="button"
                onClick={() => {
                  navigate(`reviews`, {
                    state: { from: location.state?.from },
                  });
                }}
              >
                Reviews
              </Button>
            </div>
          </div>
        </Container>
      )}

      <Outlet />
    </div>
  );
};

export default MovieDetails;
