import styled, { keyframes } from 'styled-components';

import { SkeletonProps } from '.';

const skeletonAnimation = keyframes`
  0% { transform: translateX(-400%) }
  50% { transform: translateX(-60%) }
  100% { transform: translateX(400%) }
`;

export const Container = styled.div<SkeletonProps>`
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  border-radius: ${({ radius }) => radius && radius};
  overflow: hidden;
  background-color: #eee;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: ${({ height }) => height && height};
    top: 0;
    left: 20px;
    transform: skewX(-20deg);
    animation: ${skeletonAnimation} 1.5s infinite linear;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-size: 100%;
  }
`;
