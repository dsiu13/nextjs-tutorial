import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
        <div>
        {
          props.robots.map(robot => (
            <li key={robot.id}>
              <Link href={`robots/${robot.id}`}></Link>
              <a>{robot.name}</a>
            </li>
          ))
        }
        </div>
    </div>
  );
};

export default Robots;

Robots.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    robots: data
  };
};
