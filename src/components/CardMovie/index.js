import React from 'react';

import {useDispatch} from 'react-redux';
import {seeDetails} from '../../store/ducks/movies';
import {seeDetailsTrending} from '../../store/ducks/trendings';
import {Container, Cover, Title, Duration, Button} from './styles';
import {IMAGE_W500_URL} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

const CardMovie = ({movie, trendings}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSeeDetails = () => {
    dispatch(trendings ? seeDetailsTrending(movie.id) : seeDetails(movie.id));

    navigation.navigate('MovieDetails', {
      trendings: !!trendings,
    });
  };

  return (
    <Button onPress={handleSeeDetails}>
      <Container>
        <Cover source={{uri: `${IMAGE_W500_URL}${movie.poster_path}`}} />
        {/* <Title>{movie.title}</Title>
        <Duration>2h 31min</Duration> */}
      </Container>
    </Button>
  );
};

export default CardMovie;
