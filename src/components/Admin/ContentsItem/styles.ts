import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }

  .title {
    font-size: 15px;
    line-height: 25px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 1;
    height: 25px;
    padding: 0 5px;
  }

  .nickname {
    font-size: 12px;
    padding: 0 5px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;

  button {
    width: 48px;
    height: 20px;
    font-size: 12px;

    &.editBtn {
      background-color: #efe0e0;
    }

    &.deleteBtn {
      background-color: #690000;
      color: white;
    }
  }
`;
