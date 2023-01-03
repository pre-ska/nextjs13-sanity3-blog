import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image
            alt='logo'
            className='rounded-full'
            width={50}
            height={50}
            src='https://avatars.githubusercontent.com/u/18500014?v=4'
          />
        </Link>
        <h1>The Blog</h1>
      </div>
      <div>
        <Link
          href='https://chrome.google.com/webstore/detail/v7-gmail-zoom/nmddnckmbnlpdaehblenpajpfeajaejm'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center'
        >
          V7 Gmail Zoom
        </Link>
      </div>
    </header>
  );
};

export default Header;
