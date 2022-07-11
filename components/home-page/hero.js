import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/me.jpg"
          alt="my photo"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, My name is Abdulrhman Jarkas</h1>
      <p>I'm Front-End web developer - especially in Angular 5+, React.js and Next.Js</p>
    </section>
  );
}

export default Hero;
