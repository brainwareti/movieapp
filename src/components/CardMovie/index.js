import React from 'react';

import {Container, Cover, Title, Duration, Button} from './styles';
import {IMAGE_W500_URL} from '../../utils/constants';

const CardMovie = ({movie, navigation}) => (
  <Button>
    <Container>
      <Cover source={{uri: `${IMAGE_W500_URL}${movie.poster_path}`}} />
      <Title>{movie.title}</Title>
      <Duration>2h 31min</Duration>
    </Container>
  </Button>
);

export default CardMovie;
