const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10'>
      <div>
        <h1 className='text-6xl'>Repos Blog</h1>
        <h2 className='mt-8 md:mt-0 py-2'>
          Welcome to{' '}
          <span className='underline decoration-4 decoration-[#F7AB0A]'>
            every developer
          </span>{' '}
          nightmare!
        </h2>
        <h3 className='italic text-sm text-gray-300'>
          (what to write in placeholders)
        </h3>
      </div>

      <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>
        Repository of tutorials and practices in React, Nextjs and Nodejs
      </p>
    </div>
  );
};

export default Banner;
