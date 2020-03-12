import React, {useState} from 'react';

import {View} from 'react-native';
import movieService from '~/services/MovieDatabase';

// import { Container } from './styles';

const Main = () => {
  const [trendings, setTrendings] = useState([]);

  return <View style={{backgroundColor: 'green', flex: 1}} />;
};

export default Main;
