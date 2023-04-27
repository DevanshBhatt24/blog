import Posts from "@/component/posts/posts";
import getAllPosts from "@/helper/post-util";
import Head from "next/head";
import { Fragment } from "react";

export default function AllPost({ posts }) {
  const allPost = JSON.parse(posts);
  return (
    <Fragment>
      <Head>
        <title>AllPost</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <Posts title="All Posts" data={allPost} />
    </Fragment>
  );
}
export function getStaticProps() {
  const data = getAllPosts();
  return {
    props: {
      posts: JSON.stringify(data),
    },
  };
}
