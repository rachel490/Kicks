import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export const ProfileNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

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

export const VideoContent = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  padding: 3px;
`;
