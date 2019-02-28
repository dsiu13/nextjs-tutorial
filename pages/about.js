import Link from 'next/link';

const About = () => (
  <div style={{fontSize: '20px', color: 'red'}}>
    <h1>SSR About</h1>
    <Link href='/'><button>back</button></Link>
    <p>I was a wizard once</p>
  </div>
)

export default About;
