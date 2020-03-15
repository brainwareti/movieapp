import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';

import RowMovie from '../RowMovie';

const ScrollMoviesByGenre = ({navigation}) => {
  const movies = useSelector(state => state.movies.moviesByGenre);
  const dispatch = useDispatch();

  useEffect(() => {
    console.tron.log('aqui estou mais um dia');
  }, [movies]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{marginBottom: 24, flex: 1}}>
      {movies && movies.map(movie => <RowMovie movie={movie} />)}
    </ScrollView>
  );
};

export default ScrollMoviesByGenre;
