import Link from "next/link";
import Image from "../components/image";

const About = () => {
  return (
    <div>
      <Link href="/">
        <a
          style={{
            margin: "10px",
            color: "blue",
            fontSize: "20px",
            fontFamily: "georgia"
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          style={{
            margin: "10px",
            color: "blue",
            fontSize: "20px",
            fontFamily: "georgia"
          }}
        >
          About
        </a>
      </Link>
      <Link href="/robots">
        <a
          style={{
            margin: "10px",
            color: "blue",
            fontSize: "20px",
            fontFamily: "georgia"
          }}
        >
          Robots
        </a>
      </Link>
      <p>I am learning about Next.js</p>
      <Image />
    </div>
  );
};

export default About;
