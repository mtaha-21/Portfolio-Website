import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import todoImg from '../public/assets/projects/todo.png';
import chatImg from '../public/assets/projects/chat2.png'
import netflixImg from '../public/assets/projects/netflix.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {/* <ProjectItem
            title='Todo App'
            backgroundImg={todoImg}
            projectUrl='/property'
            tech='React JS'
          /> */}
          <ProjectItem
            title='Chat App'
            backgroundImg={chatImg}
            projectUrl='/chatapp'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
