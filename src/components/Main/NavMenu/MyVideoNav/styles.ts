import styled from 'styled-components';
import { Wrap } from '../UserVideoNav/styles';

export const MyNavWrap = styled(Wrap)`
  bottom: 200px;
`;

export const Button = styled.button`
  position: relative;
  width: 100%;
  & + & {
    margin-top: 45px;
  }
  &.control {
    width: 50px;
    height: 50px;
    background-color: #545454;
    color: white;
    border-radius: 50%;
  }
`;
