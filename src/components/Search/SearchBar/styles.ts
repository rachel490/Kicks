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
  img {
    display: block;
    width: 30px;
  }
`;

export const ResetButton = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  color: #aaa;
  font-size: 13px;
  background: #ddd;
  cursor: pointer;
`;
