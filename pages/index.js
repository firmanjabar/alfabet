import Nav from '../components/nav';
import Head from '../components/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IndexPage() {
  return (
    <>
      <Head />
      <Nav />
      <div className='py-10'>
        <h1 className='text-font text-5xl text-center text-accent-1'>
          Tesla
          <FontAwesomeIcon icon={['fas', 'code']} />
        </h1>
      </div>
    </>
  );
}
