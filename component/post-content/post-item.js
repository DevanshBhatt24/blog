import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";
export default function PostItems({props}) {
    const formattedDate=new Date(props.date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    return (
    <li className={classes.post}>
      <Link href={`/post/${props.blogid}`}>
        
          <div className={classes.image}>
            <Image
              src={props.image}
              height={300}
              width={430}
              alt={props.title}
            />
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <time>{formattedDate}</time>
            <p>
             {props.excerpt}
            </p>
          </div>
        
      </Link>
    </li>
  );
}
