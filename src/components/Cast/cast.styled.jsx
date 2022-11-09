import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  justify-content: center;
  max-width: 1600px;
  list-style: none;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Item = styled.li`
  width: 180px;
  text-align: center;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
`;

export const Alert = styled.div`
  margin-top: 15px;
  margin-left: 60px;
`;
