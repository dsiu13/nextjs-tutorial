import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href="/">
        <div>
        {
          props.robots.map(robots => (
            <li key={robots.id}>
              {robots.name}
            </li>
          ))
        }
        </div>
      </Link>
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
