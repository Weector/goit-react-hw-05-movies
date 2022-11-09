import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import avatar from 'components/pictures/avatarPlaceholder.png';
import { moviesCast } from 'components/API/moviesFetch';
import { Img, Item, List, Alert } from './cast.styled';

const Cast = () => {
  const [actors, setActors] = useState({});
  const params = useParams();

  useEffect(() => {
    moviesCast(params.movieId).then(setActors);
  }, [params]);

  return (
    <div>
      {!actors?.cast?.length ? (
        <Alert>Oooops, no actors found</Alert>
      ) : (
        <List>
          {!actors.cast ? (
            <div>Not find actors</div>
          ) : (
            actors?.cast?.map(({ id, profile_path, name, character }) => (
              <Item key={id}>
                <Img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : avatar
                  }
                  alt={name}
                  width="180"
                  height="240"
                />
                <h2>{name}</h2>
                <p>Character: {character}</p>
              </Item>
            ))
          )}
        </List>
      )}
    </div>
  );
};
export default Cast;
