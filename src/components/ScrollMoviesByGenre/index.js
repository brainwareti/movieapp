import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {Container} from './styles';

import RowMovie from '../RowMovie';
import CardMovie from '../CardMovie';

const ScrollMoviesByGenre = ({navigation}) => {
  const movies = useSelector(state => state.movies.moviesByGenre);
  const dispatch = useDispatch();

  useEffect(() => {
    console.tron.log('aqui estou mais um dia');
  }, [movies]);

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
