import styled from 'styled-components';

const posterRatio = 2 / 3;

const posterheight = 145;
const posterwidth = posterheight * posterRatio;

export const Container = styled.View`
  height: ${posterheight}px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 14px;
`;

export const Cover = styled.Image`
  width: ${posterwidth}px;
  height: ${posterheight}px;
  margin-bottom: 12px;
  border-radius: 8px;
  background-color: orange;
`;

export const Details = styled.View`
  margin-left: 12px;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
export const Genres = styled.Text``;
export const Year = styled.Text``;

export const Button = styled.TouchableOpacity``;
