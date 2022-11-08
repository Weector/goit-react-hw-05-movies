import { moviesReviews } from 'components/API/moviesFetch';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const params = useParams();

  useEffect(() => {
    moviesReviews(params.movieId).then(setReview);
  }, [params]);

  return (
    <ul>
      {review.total_pages
        ? review?.results?.map(({ author, content, id }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))
        : 'There no reviews for this movie :('}
    </ul>
  );
};
export default Reviews;
