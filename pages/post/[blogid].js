import PostContent from "@/component/posts/post-details/post-content";
import { getAllfiles, getpostdata } from "@/helper/post-util";
import Head from "next/head";
import { Fragment } from "react";

export default function PostDescription({postdata}){
   const desc=JSON.parse(postdata)
    return <Fragment>
      <Head>
         <title>{desc.title}</title>
         <meta name="description" content={desc.excerpt}/>
      </Head>
       <PostContent postcontent={desc}/>
    </Fragment>
   }
export async function getStaticPaths(){
   const postFileName=getAllfiles();
   const id=postFileName.map(filename=>filename.replace(/\.md$/,''));
   return {
      paths:id.map(slug=>({params:{blogid:slug}})),
      fallback:false
   }
}

export async function getStaticProps(context){
   const {params}=context;
   const {blogid}=params;
   const data=getpostdata(blogid)
   return {
      props:{
         postdata:JSON.stringify(data)
      }
   }
}