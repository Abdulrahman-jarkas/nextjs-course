import PostContent from "../../components/posts/post-details/post-content";
import { getAllFiles, getPostFile } from "../../lib/posts-utils";
import Head from "next/head";

function PostDetailsPage({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent content={post} />
    </div>
  );
}

// this function will not worl alone in dynamic pages
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postDetials = getPostFile(slug);

  return {
    props: {
      post: postDetials,
    },
  };
}

// lets next js konw which concrete slug value should be re-generate
export function getStaticPaths() {
  const allFiles = getAllFiles();
  const slugs = allFiles.map((f) => f.replace(/\.md$/, ""));

  return {
    paths: [...slugs.map((slug) => ({ params: { slug: slug } }))],
    fallback: false,
  };
}

export default PostDetailsPage;
