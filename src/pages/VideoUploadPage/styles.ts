import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
	padding: 20px;
`;
export const FileInput = styled.input`
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
  margin-top: 30px;
  width: 100%;
  border: 2px dashed rgba(22, 24, 35, 0.2);
  border-radius: 8px;
  display: flex;
	flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 0;

  img {
    width: 50px;
    margin-bottom: 10px;
  }

  h2 {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
  }

  span {
    color: ${({ theme }) => theme.color.nav_active_bg};
  }

  button {
    font-size: 17px;
    margin-top: 20px;
    border-radius: 10px;
    color: ${({ theme }) => theme.color.text_white};
    background-color: #fe2c55;
    width: 180px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #ff1764;
    }
  }

  &:hover {
    border-color: #fe2c55;
    background-color: rgba(0, 0, 0, 0.03);
  }
`;