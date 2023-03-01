import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  transition: transform 100ms ease-in-out;
  border-radius: 2px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImagePost = styled.img`
  border-radius: 4px;
  padding: 5px;
  max-width: 100%;
`;

export const TitlePost = styled.h1``;

export const DescriptionPost = styled.p``;
