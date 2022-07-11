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
      <h1>Hi, My name Is Abdulrhman Jarkas</h1>
      <p>Im front-end web developer - especially in angular and react.js</p>
    </section>
  );
}

export default Hero;
