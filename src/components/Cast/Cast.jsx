import { moviesCast } from 'components/API/moviesFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import avatar from 'components/pictures/avatarPlaceholder.png';

const Cast = () => {
  const [actors, setActors] = useState({});
  const params = useParams();

  useEffect(() => {
    moviesCast(params.movieId).then(setActors);
  }, [params]);
  if (!actors) return;

  return (
    <div>
      <ul>
        {actors?.cast?.map(actor => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                  : avatar
              }
              alt={actor.name}
              width="180"
              height="220"
            />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
