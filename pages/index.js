import Link from "next/link";

const Index = () => (
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
    <h2>Server Side Rendering with Next.js</h2>
  </div>
);

export default Index;
