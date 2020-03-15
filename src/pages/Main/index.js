/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {View, Text} from 'react-native';
import {getTrendings} from '../../services/MovieDatabase/functions';
import {Types as TrendingsTypes} from '../../store/ducks/trendings';
import {Types as GenresTypes} from '../../store/ducks/genres';
import {Container, MovieTitle, TopicTitle} from './styles';

import HorizontalScroolTrendingsMovies from '../../components/HorizontalScroolTrendingsMovies';
import HorizontalScroolGenres from '../../components/HorizontalScroolGenres';
import ScrollMoviesByGenre from '../../components/ScrollMoviesByGenre';

const Main = () => {
  const trendings = useSelector(state => state.trendings.trendings);
  const genres = useSelector(state => state.genres.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: TrendingsTypes.DOWNLOAD_TRENDINGS});
    dispatch({type: GenresTypes.GET_GENRES});
  }, []);

  return (
    <Container>
      <MovieTitle>Movies</MovieTitle>

      <TopicTitle>TRENDINGS</TopicTitle>
      <HorizontalScroolTrendingsMovies trendings={trendings} />

      <TopicTitle>GENRES</TopicTitle>
      <HorizontalScroolGenres genres={genres} />
      <ScrollMoviesByGenre />
    </Container>
  );
};

export default Main;
