import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";
export default function NavigationBar() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/post">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
