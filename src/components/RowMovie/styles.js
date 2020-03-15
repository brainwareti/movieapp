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
  margin-left: 18px;
  justify-content: flex-end;
  align-items: flex-start;
  flex: 1;
  padding-bottom: 8px;
`;

export const TitleYearContainer = styled.View`
  flex-direction: row;
`;
export const Title = styled.Text`
  font-size: 19px;
  color: #fff;
  font-weight: bold;
`;
export const Genres = styled.Text`
  color: #a3a3a3;
  font-size: 16px;
  font-weight: 100;
`;
export const Year = styled.Text`
  color: #a3a3a3;
  font-size: 13px;
  font-weight: 100;
`;

export const Button = styled.TouchableOpacity``;
