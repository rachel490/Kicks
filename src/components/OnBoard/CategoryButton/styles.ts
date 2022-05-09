import styled from 'styled-components';

export const Button = styled.button<{ isSelected: boolean }>`
  border: 1px solid black;
  padding: 12px 17px;
  font-size: 16px;
  border-radius: 24.5px;
  margin: 8px;
  background-color: ${({ isSelected }) => (isSelected ? 'black' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;
