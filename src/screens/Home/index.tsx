import React, { useCallback, useEffect, useState } from 'react';
import { CardPost } from '../../components/CardPost';
import { getAllListProducts } from '../../actions/list-all-products';
import { Container, ContainerSkeleton, GridPost } from './styles';
import './styles.ts';
import { Skeleton } from '../../components/Skeleton';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loadPosts, setLoadPosts] = useState(true);

  const handlePostList = useCallback(async () => {
    try {
      const responsePostsAndPhotos = await getAllListProducts();
      setPosts(responsePostsAndPhotos);
      setLoadPosts(false);
      return responsePostsAndPhotos;
    } catch (err) {
      return err;
    }
  }, []);

  useEffect(() => {
    handlePostList();
  }, [handlePostList]);

  return (
    <>
      <Container className="Home">
        <GridPost className="grid-container">
          {!loadPosts
            ? posts.map((post) => <CardPost posts={post}></CardPost>)
            : [...Array(20)].map((_, index) => (
                <ContainerSkeleton key={index}>
                  <Skeleton width="300px" height="474px" radius="2px" />
                </ContainerSkeleton>
              ))}
        </GridPost>
      </Container>
    </>
  );
};

export default Home;
