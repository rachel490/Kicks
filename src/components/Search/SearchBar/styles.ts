import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dadada;
  padding: 0 ${({ theme }) => theme.style.edge_padding};
  background: #fff;
  height: ${({ theme }) => theme.style.header_height};
`;

export const InputArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  padding-right: 10px;
  &::placeholder {
    color: #dadada;
  }
`;

export const SearchButton = styled.button`
  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`;

export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #aaa;
  background: #ddd;
  cursor: pointer;
`;
