type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const posts = []; // fetch data;
  return {
    props: {
      posts,
    },
  };
};
