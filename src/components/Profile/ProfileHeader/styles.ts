import styled from 'styled-components';

export const ProfileHeader = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    margin-bottom: 10px;
  }

  .profile-username {
    span {
      font-size: 15px;
    }
  }

  .profile-edit-btn {
    border: ${({ theme }) => theme.style.border_light};
    width: 100%;
    padding: 10px 0;
    border-radius: 10px;
  }
`;

export const ProfileStats = styled.ul`
  margin: 20px 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  li,
  a {
    width: 55px;
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
