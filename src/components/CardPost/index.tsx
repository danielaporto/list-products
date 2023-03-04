import React, { FC } from 'react';
import { Container, ImagePost, TitlePost, DescriptionPost } from './styles';
import Clamp from 'react-multiline-clamp';
import { capitalize } from '../../utils/capitalized';
import NoPhoto from '../../assets/images/sem-foto.webp';

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
      <ImagePost src={posts.cover ? posts.cover : NoPhoto} alt={posts.title} />
      <Clamp lines={2}>
        <TitlePost>{capitalize(posts.title)}</TitlePost>
      </Clamp>
      <Clamp lines={4}>
        <DescriptionPost>{capitalize(posts.body)}</DescriptionPost>
      </Clamp>
    </Container>
  );
};
