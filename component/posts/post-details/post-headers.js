import Image from "next/image";
import classes from "./post-headers.module.css";
export default function PostHeaders(props) {
  const { title, image } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={400} height={400} />
    </header>
  );
}
