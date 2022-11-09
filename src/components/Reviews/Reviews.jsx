import { useEffect, useState } from 'react';
import { moviesReviews } from 'components/API/moviesFetch';

import { useParams } from 'react-router-dom';
import { List } from './reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const params = useParams();

  useEffect(() => {
    moviesReviews(params.movieId).then(setReview);
  }, [params]);

  return (
    <List>
      {review.total_pages
        ? review?.results?.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))
        : 'There no reviews for this movie :('}
    </List>
  );
};
export default Reviews;
