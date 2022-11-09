import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 140px;
`;

export const Field = styled.input`
  width: 300px;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const Button = styled.button`
  margin-left: 10px;
  padding: 11px;
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

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-bottom: 10px;
`;
