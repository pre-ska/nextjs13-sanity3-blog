import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div>
        <Link href='/' className='text-[#F7AB0A] p-10 flex item-center'>
          {/* <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A] mr-2' /> */}
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default StudioNavbar;
