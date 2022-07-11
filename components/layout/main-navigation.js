import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      {/* if you wasn't render plain text inside Link component,
       next js will not use <a><a/>,
       so you should wrap you content with <a><Logo/><a/>,
       next js will use href and another properties in <a> that you added
       */}
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
