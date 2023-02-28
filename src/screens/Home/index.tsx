import React, { useCallback, useEffect, useState } from 'react';
import { CardPost } from '../../components/CardPost';
import { getAllListProducts } from '../../actions/list-all-products';
import { Container, GridPost } from './styles';
import './styles.ts';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const handlePostList = useCallback(async () => {
    const responsePostsAndPhotos = await getAllListProducts();
    setPosts(responsePostsAndPhotos);
  }, []);

  useEffect(() => {
    handlePostList();
  }, [handlePostList]);

  return (
    <>
      <Container className="Home">
        <GridPost>
          {posts.map((post) => (
            <CardPost posts={post}></CardPost>
          ))}
        </GridPost>
      </Container>
    </>
  );
};

export default Home;
