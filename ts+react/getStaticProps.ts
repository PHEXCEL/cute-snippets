type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const posts = []; // fetch data;
  return {
    props: {
      posts,
    },
  };
};
