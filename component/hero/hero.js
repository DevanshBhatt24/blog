import classes from "./hero.module.css";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/Devansh.jpeg"}
          height={400}
          width={400}
          alt="Devansh Bhatt"
        />
      </div>
      <h1>Hi, I'm Devansh Bhatt</h1>
      <p>I blog about porn industry and call girls.</p>
    </section>
  );
}
