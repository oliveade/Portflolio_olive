

import React, {useState} from 'react';
import { Link } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/avatar.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (

    
    <div className='place-items-stretch w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>

      <div className='pr-10 flex justify-between items-center w-full h-full'>
        <div className='ml-4 space-x-4 space-x-reverse flex items-center'>
        <img alt="logo" src={logo} width="75px" />
        </div>
        <div className='pr-10 space-x-6 space-x-reverse flex items-center font-medium text-gray-900 md:block hidden'>
          <ul className='flex items-center gap-5  text-lg px-6 cursor-pointer'>
          <li className='hover:text-cyan-600'><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='hover:text-cyan-600'><Link to="about" smooth={true} offset={-200} duration={500}>A propos</Link></li>
          <li className='hover:text-cyan-600'><Link to="cursus" smooth={true} offset={-100} duration={500}>Cursus</Link></li>
          <li className='hover:text-cyan-600'><Link to="competence" smooth={true} offset={-50} duration={500}>Compétences</Link></li>
          <li className='hover:text-cyan-600'><Link to="projets" smooth={true} offset={-100} duration={500}>Projets</Link></li>
          <li className='hover:text-cyan-600'><Link to="contact" smooth={true} offset={-100} duration={500}>Contact</Link></li>
          
          </ul>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8 '}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="competence" smooth={true} offset={-50} duration={500}>Compétences</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="projets" smooth={true} offset={-100} duration={500}>Projets</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="cursus" smooth={true} offset={-100} duration={500}>Cursus</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="contact" smooth={true} offset={-100} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;

