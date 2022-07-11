import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFilteredPosts } from "../lib/posts-utils";
import Head from "next/head";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>Featured Post</title>
        <meta
          name="description"
          content="this page for view featured podcast"
        ></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  // this wil be called for every request in development
  // but in producation will be called once.
  const featuredPosts = getFilteredPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
