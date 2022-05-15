import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  justify-content: space-between;
`;

export const Button = styled.button<{ selected: boolean }>`
  height: 100%;
  width: 165px;
  border: 1px solid ${({ selected }) => (selected ? 'black' : '#ddd')};
  border-radius: 4px;
  background-color: ${({ selected }) => (selected ? 'black' : 'white')};
  color: ${({ selected }) => (selected ? 'white' : '#ddd')};
`;