import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {Container} from './styles';

import RowMovie from '../RowMovie';
import CardMovie from '../CardMovie';

const ScrollMoviesByGenre = () => {
  const movies = useSelector(state => state.movies.moviesByGenre);
  const dispatch = useDispatch();

  useEffect(() => {}, [movies]);

  return (
    <Container>
      <FlatList
        data={movies}
        renderItem={({item}) => <CardMovie movie={item} />}
        keyExtractor={movie => movie.id}
        numColumns={2}
      />
    </Container>
  );
};

export default ScrollMoviesByGenre;
