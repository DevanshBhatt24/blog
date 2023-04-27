import classes from "./posts.module.css";
import PostGrid from "../post-content/postgrid";
export default function Posts(props){
    return <section className={classes.latest}>
        <h2>{props.title}</h2>
        <PostGrid posts={props.data}/>
        
    </section>
}