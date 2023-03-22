/*import React, { useEffect, useState } from "react";
import logo from '../assets/avatar.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "Competences", link: "#competence" },
    { name: "PROJETS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
        const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
        <img alt="logo" src={logo} width="75px" />
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li key={i} className="px-6 hover:text-cyan-600">
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-cyan-600"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
*/
import React, {useState} from 'react';
import { Link } from 'react-scroll'


import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from '../assets/avatar.png'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(!nav)

  return (

    
    <div className='place-items-stretch w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>

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

