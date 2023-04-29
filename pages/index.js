import { Fragment } from "react";
import Hero from "@/component/hero/hero";
import Posts from "@/component/posts/posts";
import { featuredPost } from "@/helper/post-util";
import Head from "next/head";

export default function HomePage({ postsdata }) {
  const post = JSON.parse(postsdata);

  return (
    <Fragment>
      <Head>
        <title>Devansh's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />

      <Posts title="Featured Posts" data={post} />
    </Fragment>
  );
}
export async function getStaticProps() {
  const featuredData = featuredPost();
  return {
    props: {
      postsdata: JSON.stringify(featuredData),
    },
    revalidate:100
  };
}
