import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <div className='lg:bg-[#02273B] bg-[#02273B] flex justify-center items-center h-screen w-full'>

      <div className="flex flex-col items-center">
        <Image
          src="/assets/logo.png"
          alt="Picture of the author"
          width={0}
          height={0}
          sizes="100vw"
          className='lg:w-[40%] w-[70%] pb-6'
        />

<h1 className='text-3xl lg:text-4xl  text-white font-LO'>
<Typewriter
  options={{
    strings: ['Coming soon!'],
    autoStart: true,
    loop: true,
    pauseFor:1500
  }}

/>
</h1>

<h1 className='text-2xl pt-4 lg:text-3xl text-white  font-LO select-none'>Site under construction</h1>
      </div>

    </div>
  );
}

export default Home;