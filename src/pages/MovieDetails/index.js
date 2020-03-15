import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {Container, Cover} from './styles';

import {IMAGE_W780_URL} from '../../utils/constants';

const MovieDetails = () => {
  const route = useRoute();

  const {trendings} = route.params;
  const movie = useSelector(state =>
    trendings ? state.trendings.selectedMovie : state.movies.selectedMovie,
  );

  return (
    <Container>
      <Cover source={{uri: `${IMAGE_W780_URL}${movie.poster_path}`}} />
    </Container>
  );
};

export default MovieDetails;
