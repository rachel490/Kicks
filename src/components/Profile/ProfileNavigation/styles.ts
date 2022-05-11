import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const ProfileNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    font-size: 17px;
    width: 50%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.nav_active_bg};
    border-bottom: ${({ theme }) => theme.style.border_light};
  }

  button.active {
    color: ${({ theme }) => theme.color.text};
    border-bottom: 2px solid ${({ theme }) => theme.color.text};
  }
`;
