import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from '../assets/Logo1.png'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-16 mx-auto px-4 sm:px-14 bg-white shadow-md w-full  md:ml-0">
      <a href="#">
      <img src= {Logo} alt="Logo" className='w-12' />
      </a>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-7 text-sm">
        <li className="p-4  font-bold">
          <a href="#">Home</a>
        </li>
        <li className="p-4  font-bold">
          <a href="#">Collections</a>
        </li>
        <li className="p-4  font-bold">
          <a href="#">About</a>
        </li>
        <li className="p-4  font-bold">
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      <div className="md:hidden flex flex-col items-end ">
        <button
          className="text-sm font-bold py-2 px-7 hover:duration-300 "
          onClick={handleNav}
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          nav ? 'flex' : 'hidden'
        } flex-col bg-white w-full absolute top-24 left-0 p-4 shadow-md `}
      >
        <li className="p-4 text-sm font-bold">
          <a href="#">Home</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Collections</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">About</a>
        </li>
        <li className="p-4 text-sm font-bold">
          <a href="#">Contact</a>
        </li>
      </ul>

     
    </div>
  );
};

export default Navbar;