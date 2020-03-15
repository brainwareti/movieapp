import React from 'react';
import {IMAGE_W342_URL} from '../../utils/constants';
import StarRating from 'react-native-star-rating';

import {Container, Cover, Button, Details, Title, Genres, Year} from './styles';

const RowMovie = ({movie}) => {
  return (
    <Button>
      <Container>
        <Cover source={{uri: `${IMAGE_W342_URL}${movie.poster_path}`}} />
        <Details>
          <Title>
            {movie.title}{' '}
            <Year>{` (${movie.release_date.substring(0, 4)})`}</Year>
          </Title>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={movie.vote_average / 2}
            starSize={18}
            fullStarColor={'yellow'}
            halfStarColor={'yellow'}
            emptyStarColor={'#a3a3a3'}
            halfStarEnabled={true}
          />
        </Details>
      </Container>
    </Button>
  );
};

export default RowMovie;
