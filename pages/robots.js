import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Robots = props => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/index">
        <a>Home</a>
      </Link>
      <div>
        {props.robots.map(robot => (
          <li key={robot.id}>
            <Link href={`robots/${robot.id}`}>
              <a> Username: {robot.username}</a>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

Robots.getInitialProps = async function() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    robots: data
  };
};

export default Robots;
