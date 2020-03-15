import styled from 'styled-components';

const posterRatio = 2 / 3;

const posterwidth = 140;
const posterheight = 145 / posterRatio;

export const Container = styled.View`
  width: 140px;
  margin-right: 12px;
  align-self: center;
`;

export const Cover = styled.Image`
  width: 100%;
  height: ${posterheight}px;
  margin-bottom: 12px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const Duration = styled.Text`
  color: #b2b4b5;
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity``;
