import React, {useEffect} from 'react';
import {Types, selectGenre} from '../../store/ducks/genres';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Title, Button} from './styles';

const Tag = ({genre}) => {
  const dispatch = useDispatch();
  const selectedGenreId = useSelector(state => state.genres.selectedGenreId);

  useEffect(() => {
    console.tron.log('rerender');
  }, [selectedGenreId]);

  const handleSelectGenre = () => {
    const {id} = genre;
    dispatch(selectGenre(id));
  };

  const selected = genre.id === selectedGenreId;

  return (
    <Button onPress={() => handleSelectGenre()}>
      <Container selected={selected}>
        <Title selected={selected}>{genre.name}</Title>
      </Container>
    </Button>
  );
};

export default Tag;
