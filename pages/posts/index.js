import AllPosts from "../../components/posts/all-posts";
import { getAllPostsFiles } from "../../lib/posts-utils";
import Head from "next/head";

function AllPostsPage({ posts }) {
  // can't access to file system in component
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="list of all posts in blog" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  // this wil be called for every request in development
  // but in producation will be called once.
  const allPosts = getAllPostsFiles();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
