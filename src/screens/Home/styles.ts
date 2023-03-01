import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  padding: 30px;
`;

export const ContainerSkeleton = styled.div`
  padding: 10px;
  max-width: 300px;
  border-radius: 2px;
`;

export const GridPost = styled.div`
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  display: grid;
  gap: 30px;
`;
