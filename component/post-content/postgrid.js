import classes from './postgrid.module.css'
import PostItems from './post-item'
export default function PostGrid({posts}){
    return <ul className={classes.grid}> 
    {posts.map(post=> <PostItems key={post.blogid} props={post}/>)}
    </ul>
}