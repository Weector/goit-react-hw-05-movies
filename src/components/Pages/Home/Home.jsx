import { moviesTrends } from 'components/API/moviesFetch';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Img,
  Item,
  List,
  MainTitle,
  Title,
} from './home.style';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    moviesTrends().then(data => setMovies(data.results));
  }, []);

  return (
    <Container>
      <MainTitle>Today's TOP-20</MainTitle>
      <List>
        {movies?.map(({ title, id, poster_path }) => (
          <Box key={id} to={`/movies/${id}`} state={{ from: location }}>
            <Item>
              <Img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
                width="100"
                height="150"
              />
              <Title>{title}</Title>
            </Item>
          </Box>
        ))}
      </List>
    </Container>
  );
};

export default Home;
