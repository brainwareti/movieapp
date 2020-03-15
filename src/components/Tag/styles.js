import styled from 'styled-components';

export const Container = styled.View`
  background-color: ${props => (props.selected ? '#E11A38' : '#1b1b1f')};
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${props => (props.selected ? '#FFF' : '#a3a3a3')};
  text-align: center;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;
