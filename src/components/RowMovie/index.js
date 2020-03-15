import React from 'react';
import {IMAGE_W342_URL} from '../../utils/constants';

import {Container, Cover, Button, Details, Title, Genres, Year} from './styles';

const RowMovie = ({movie}) => (
  <Button>
    <Container>
      <Cover source={{uri: `${IMAGE_W342_URL}${movie.poster_path}`}} />
      <Details>
        <Title>{movie.title}</Title>
      </Details>
    </Container>
  </Button>
);

export default RowMovie;
