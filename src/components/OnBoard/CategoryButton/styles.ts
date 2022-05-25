import styled from 'styled-components';

export const Button = styled.button<{ isSelected: boolean }>`
  border: 1px solid black;
  padding: 9px 13px;
  font-size: 16px;
  border-radius: 25px;
  margin: 8px;
  background-color: ${({ isSelected }) => (isSelected ? '#3a3a3a' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;
