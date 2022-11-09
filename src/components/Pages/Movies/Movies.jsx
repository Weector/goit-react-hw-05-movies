import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { moviesSearch } from 'components/API/moviesFetch';
import { Button, Container, Field, Form, Item } from './movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState({});
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    moviesSearch(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <Container>
      <h1>Search movies</h1>
      <Form onSubmit={handleSubmit}>
        <Field name="query" type="text" />
        <Button type="submit">SEARCH</Button>
      </Form>
      <ol>
        {movies?.results?.map(({ id, title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </Item>
        ))}
      </ol>
    </Container>
  );
};
export default Movies;
