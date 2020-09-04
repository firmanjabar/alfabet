import Nav from '../components/nav';
import HeadCustom from '../components/head';

export default function IndexPage() {
  return (
    <>
      <HeadCustom />
      <Nav />
      <div className='py-10'>
        <h1 className='text-font text-4xl text-center text-accent-1'>Buat landing page!</h1>
      </div>
    </>
  );
}
