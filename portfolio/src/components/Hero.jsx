import React from 'react'
import Immage from '../assets/fond.webp'
import cvV from '../assets/Cv.pdf'
function Hero() {
  return (
    <section className='p-40 grid lg:grid-cols-2 py-15 px-20'>
    <div>
         <h3 className='text-4xl'>Hello,</h3>
      <h1 className='text-5xl font-bold'>I am Olive ADE.</h1>
      <h5 className='text-3xl text-[#EDA751]'>Developpeur web junior</h5>
      <p className='text-[#676767] text-lg mt-8 mb-20 w-80'>Hello, Je suis étudiante en informatique à l'ETNA</p>
      <a download="" href={cvV} className='btn font-sans inline-block mt-4 py-2 px-8 rounded-[30px] bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white'> Télecharger CV</a>
    </div>
    <img className='w-200 rounded-lg p-2' src={Immage} alt="/" />
    </section>
  )
}
export default Hero;