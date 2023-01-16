import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import AvatarMaker from '../public/assets/avatarr.png';

const Main = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p style={{height:"180px"}}></p>
        <Image
                  className='rounded-xl hover:scale-75 ease-in duration-100'
                  src={AvatarMaker}
                  alt='/'
                />
          {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
          <h2 className='py-4 text-gray-700'>
          <p style={{ color: "", fontWeight: "bold" }}><Typewriter
                words={["Hello", "Namaste", "Vanakkam","Bonjour","Hola","& Asalaam Alaikum"]}
                loop={10}
                cursor
                cursorStyle="👋"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />,  <span className='text-[#5651e5]'> I&#39;m Taha.M</span>
          </p></h2>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/taha-murtaza/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/mtaha-21'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
