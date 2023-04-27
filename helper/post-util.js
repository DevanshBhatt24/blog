import fs from "fs";
import matter from "gray-matter";
import path from "path";
const pathdir = path.join(process.cwd() + "/posts");
export function getAllfiles(){
    return fs.readdirSync(pathdir);
}
export function getpostdata(filename) {
  const id = filename.replace(/\.md$/, "");
  const postdir = path.join(pathdir, `${id}.md`);
  const filecontent = fs.readFileSync(postdir, "utf-8");
  const { data, content } = matter(filecontent);
  
  const postdata = {
    blogid: id,
    ...data,
    content,
  };
  return postdata;
}
export default function getAllPosts() {
  const postfile = getAllfiles()
  const data = postfile.map((post) => getpostdata(post));
  const sortdata = data.sort((x, y) => (x.date > y.date ? -1 : 1));
  return sortdata
}
export function featuredPost(){
 const posts=getAllPosts()
 const featurepost=posts.filter(post=>post.isFeatured)
 return featurepost
}