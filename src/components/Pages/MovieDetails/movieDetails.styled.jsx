import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(Link)`
  position: absolute;
  top: 9px;
  left: 30px;
  padding: 10px;
  background-color: #090231;
  color: #e9e5e5;
  border: none;
  border-radius: 10px;
  border-bottom-left-radius: 100px;
  border-top-left-radius: 100px;
  text-decoration: none;
  font-size: 20px;

  transition: background-attachment 500ms ease;

  :hover,
  :focus {
    background-color: #4533d4;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 30px;
  max-width: 700px;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 30px;
  padding: 20px;

  border-radius: 10px;
  box-shadow: rgba(134, 130, 130, 0.06) 0px 2px 4px 0px inset;
`;

export const Button = styled.button`
  margin-left: 30px;
  padding: 5px;
  width: 100px;
  background-color: #090231;
  color: #e9e5e5;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  font-size: 20px;

  transition: background-attachment 500ms ease;

  :hover,
  :focus {
    background-color: #4533d4;
  }
`;
