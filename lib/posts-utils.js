import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostFile(postIdentify) {
  const filePath = path.join(postsDirectory, `${postIdentify}.md`);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  return {
    slug: postIdentify,
    ...data,
    content,
  };
}

export function getAllPostsFiles() {
  const postsFiles = getAllFiles();
  const postsData = postsFiles.map((post) =>
    getPostFile(post.replace(/\.md$/, ""))
  );
  const soretedData = postsData.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return soretedData;
}

export function getFilteredPosts() {
  const featuredPosts = getAllPostsFiles().filter((post) => post.isFeatured);
  return featuredPosts;
}
