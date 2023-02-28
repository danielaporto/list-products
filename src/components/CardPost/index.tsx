import React, { FC } from 'react';
import { Container, ImagePost, TitlePost, DescriptionPost } from './styles';

interface PostProps {
  posts: CardPostProps;
}

interface CardPostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  cover: string;
}

export const CardPost: FC<PostProps> = ({ posts }) => {
  return (
    <Container key={posts.id} className="CardPost">
      <ImagePost src={posts.cover} />
      <TitlePost>{posts.title}</TitlePost>
      <DescriptionPost>{posts.body}</DescriptionPost>
    </Container>
  );
};
