import React, { FC } from 'react';
import { Container, ImagePost, TitlePost, DescriptionPost } from './styles';
import Clamp from 'react-multiline-clamp';

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
      <Clamp lines={2}>
        <TitlePost>{posts.title}</TitlePost>
      </Clamp>
      <Clamp lines={4}>
        <DescriptionPost>{posts.body}</DescriptionPost>
      </Clamp>
    </Container>
  );
};
