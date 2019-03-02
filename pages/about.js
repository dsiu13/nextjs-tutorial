import Link from 'next/link';
import Image from '../components/image';

const About = () => (
  <div style={{fontSize: '20px', color: 'red'}}>
    <h1>SSR About</h1>
    <Link href='/'><button>back</button></Link>
    <p>I was a wizard once</p>
    <Image />
  </div>
)

export default About;
