import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/">
      <a>Home</a>
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
    <h2>Server Side Rendering with Next.js</h2>
  </div>
);

export default Index;
