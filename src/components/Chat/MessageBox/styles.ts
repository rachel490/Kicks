import styled from 'styled-components';

export const MessageBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px ${({ theme }) => theme.style.edge_padding};
  background: #ccc;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 10px;
`;

export const InputContainer = styled.div`
  flex: 1;
  border-radius: 20px;
  padding: 5px 10px;
  background: #aaa;
  height: auto;

  textarea {
    display: block;
    width: 100%;
    height: 30px;
    font-size: 14px;
    padding: 5px 0;
    border: none;
    background: #aaa;
    font-family: inherit;
    resize: none;
    white-space: pre-wrap;
    overflow-y: scroll;
    &::placeholder {
      color: #555;
    }
    &:focus {
      outline: none;
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
      -webkit-border-radius: 4px;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 4px;
      border-radius: 4px;
      background: #777;
    }
  }
`;

export const SendButton = styled.button`
  width: 25px;
  height: 25px;
  margin-left: 8px;
  border-radius: 50%;
  color: #fff;
  background-color: ${({ theme }) => theme.color.nav_active_bg};

  &.active {
    background-color: ${({ theme }) => theme.color.main};
  }
`;
