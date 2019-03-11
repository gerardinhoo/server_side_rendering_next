import Link from "next/link";

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
        <a>About</a>
      </Link>
      <p>I am learning about Next.js</p>
    </div>
  );
};

export default About;
