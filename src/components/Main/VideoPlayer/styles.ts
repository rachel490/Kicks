import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;

  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    width: 80px;
    height: 80px;
    opacity: 0;
  }

  .hide {
    animation-name: fadeOut;
    animation-duration: 3s;
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
