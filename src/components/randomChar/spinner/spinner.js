import React from 'react';
import styled, { keyframes } from 'styled-components';

const animKeyFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainerBlock = styled.div`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 300px;
  overflow: hidden;
  background: rgba(NaN, NaN, NaN, 0);
`;

const LoadingAnimBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */

  div {
    position: absolute;
    animation: ${animKeyFrames} 1s linear infinite;
    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 0 0 #ffffff;
    transform-origin: 80px 82px;
    box-sizing: content-box;
  }
`;

const Spinner = () => {
  return (
    <LoadingContainerBlock>
      <LoadingAnimBlock>
        <div></div>
      </LoadingAnimBlock>
    </LoadingContainerBlock>
  );
};

export default Spinner;
