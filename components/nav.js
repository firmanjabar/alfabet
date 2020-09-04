import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const links = [
  { href: '/', icon: ['fas', 'home'] },
  { href: '/belajar', icon: ['fas', 'font'] },
];

export default function Nav() {
  return (
    <nav>
      <ul className='flex justify-between items-center py-6 px-2 xsm:px-8 lg:px-40 bg-third'>
        <li>
          <Link href='/'>
            <a className='logo no-underline'>
              <FontAwesomeIcon icon={['fas', 'font']} />L - FABET
            </a>
          </Link>
        </li>
        <ul className='justify-between items-center space-x-4 hidden xsm:flex'>
          {links.map(({ href, icon }) => (
            <li key={`${href}`}>
              <Link href={href}>
                <a className='nav-item'>
                  <FontAwesomeIcon icon={icon} size='lg' />
                </a>
              </Link>
            </li>
          ))}
          <li>
            <a href='https://github.com/firmanjabar/alfabet' className='nav-item'>
              <FontAwesomeIcon icon={['fab', 'github-alt']} size='lg' />
            </a>
          </li>
        </ul>
        <div className='flex xsm:hidden px-2'>
          <Link href='/belajar'>
            <a className='nav-item'>
              <FontAwesomeIcon icon={['fas', 'font']} size='lg' />
            </a>
          </Link>
        </div>
      </ul>
    </nav>
  );
}
