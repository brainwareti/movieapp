import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {ScrollView} from 'react-native';

import Tag from '../Tag';

const HorizontalScroolGenres = ({genres}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginBottom: 24}}>
      {genres && genres.map(genre => <Tag key={genre.id} genre={genre} />)}
    </ScrollView>
  );
};

export default HorizontalScroolGenres;
