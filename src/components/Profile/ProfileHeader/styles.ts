import styled from 'styled-components';

export const Wrap = styled.div`
  width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 50px;

  .profile-username {
    margin-top: 10px;
    font-size: 15px;
  }
`;

export const ProfileStats = styled.ul`
  margin: 18px 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li,
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .profile-stat-value {
      font-weight: bold;
      font-size: 18px;
    }

    .profile-stat-name {
      font-size: 13px;
      margin-top: 5px;
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .profile-btn {
    border: ${({ theme }) => theme.style.border_light};
    width: 100%;
    height: 37px;
    border-radius: 20px;

    &:first-child {
      margin-right: 10px;
    }
    a {
      display: block;
      padding: 10px 0;
    }
  }
`;
