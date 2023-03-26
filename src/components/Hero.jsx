import React from 'react'
import Immage from '../assets/fond.webp'
import cvV from '../assets/Cv.pdf'
import Typed from "react-typed";
import {
  DatabaseIcon,
  CodeIcon,
} from '@heroicons/react/solid'
function Hero() {
  return (
    <section className='p-40 grid lg:grid-cols-2 py-15 px-20 h1/2 lg:h-screen bg-gradient-to-t from-blue-200'>
      <div>
        <div>
        <h3 className='text-4xl animate-slideInLeft duration-3000 delay-1s'>Hello,</h3>
        <h1 className='text-5xl font-bold animate-slideInLeft duration-3000'>I am Olive ADE.</h1>
        <Typed
  strings={[
    "<span style='color: #ff9900; font-size: 1.5rem'>I'm a Full Stack Junior Developer</span>",
    "<span style='color: blue; font-size: 1.5rem'>I Love Software Development</span>",
    "<span style='color: #990099; font-size: 1.5rem'>Je suis étudiante à l'ETNA</span>",
  ]}
  typeSpeed={150}
  backSpeed={100}
  loop
  showCursor={false}
  smartBackspace={false}
  />
        </div>
        <a download="" href={cvV} className='btn font-sans inline-block mt-4 py-2 px-8 rounded-[30px] bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white'>
          Télecharger CV
        </a>
      </div>
      <img className='w-200 rounded-lg p-2' src={Immage} alt="/" />

      <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-indigo-300
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p className='flex justify-center font-semibold text-lg'>Développement web</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <a className='flex px-4 py-2' href="https://www.wildcodeschool.com/fr-FR/blog/differences-backend-frontend-developpement-web"><DatabaseIcon className='h-6 text-indigo-600' />Back-end</a>
                    <a className='flex px-4 py-2 ' href="https://www.wildcodeschool.com/fr-FR/blog/differences-backend-frontend-developpement-web"><CodeIcon className='h-6 text-indigo-600' />Front-end</a>
                </div>
      </div>
    </section>
  )
}

export default Hero;
