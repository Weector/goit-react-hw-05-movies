import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 30px;
  max-width: 1400px;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(134, 130, 130, 0.06) 0px 2px 4px 0px inset;
`;

export const MainTitle = styled.h1`
  color: #090231;
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 0;
`;

export const Box = styled(Link)`
  text-decoration: none;
  color: #090231;

  :hover,
  :focus {
    color: #4533d4;
  }
`;

export const Item = styled.li`
  display: block;
  width: 200px;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: scale 500ms ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 2px;

  :hover {
    scale: 1.05;
  }
`;

export const Title = styled.p`
  margin: 0;
  padding: 10px;
`;
