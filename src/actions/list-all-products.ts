export const getAllListProducts = async () => {
  try {
    const responseListAllProducts = fetch('https://jsonplaceholder.typicode.com/posts');
    const responseListAllPhotos = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([responseListAllProducts, responseListAllPhotos]);

    const postFormatterJson = await posts.json();
    const photosFormatterJson = await photos.json();

    const postsAndPhotosData = postFormatterJson.map((post: any, index: number) => {
      return { ...post, cover: photosFormatterJson[index].url };
    });

    return postsAndPhotosData;
  } catch (err) {
    console.error(err);
  }
};
