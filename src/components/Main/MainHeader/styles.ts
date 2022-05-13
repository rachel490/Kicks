import styled from 'styled-components';

export const Header = styled.div<{ isShown: boolean }>`
  position: relative;
  display: ${props => (props.isShown ? 'block' : 'none')};
`;

export const Category = styled.div`
  width: 140px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  color: #cfcfcf;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5px;

  button {
    font-size: 15px;
    color: #cfcfcf;
    line-height: 35px;
    font-weight: 500;

    &:hover {
      color: white;
    }
  }

  span {
    font-weight: 100;
    font-size: 25px;
  }
`;

export const Notification = styled.div`
  cursor: pointer;

  .icon {
    position: absolute;
    z-index: 1000;
    top: 20px;
    right: 20px;
    width: 35px;
    height: 35px;
    color: white;
  }
`;
