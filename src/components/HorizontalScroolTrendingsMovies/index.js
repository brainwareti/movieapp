import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {ScrollView} from 'react-native';

import CardMovie from '../CardMovie';

// import { Container } from './styles';

const HorizontalScroolTrendingsMovies = ({navigation, trendings}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 24}}>
      {trendings &&
        trendings.map(movie => <CardMovie movie={movie} key={movie.id} />)}
    </ScrollView>
  );
};

export default HorizontalScroolTrendingsMovies;
