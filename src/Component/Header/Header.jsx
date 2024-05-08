
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userEmail = localStorage.getItem('userEmail');
   
  

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div>

      <div className='sticky  top-0 z-40'>
        <nav className="w-full  p-5 bg-black shadow md:flex md:items-center md:justify-between  ">
          <div className="flex justify-between items-center ">
            <span className="text-2xl  cursor-pointer">
              {/* <img className="h-10 inline" src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="Tailwind Logo" /> */}
              Coffe Shop
            </span>

            <span className="text-3xl cursor-pointer mx-2 md:hidden block text-white" onClick={toggleMenu}>
              {menuOpen ? '///' : "☰"}
            </span>
          </div>

          <ul className={`md:flex lg:hidden  z-40 md:items-center ${menuOpen ? 'opacity-100 top-[70px]' : 'opacity-0 top-[-400px]'} absolute 
        bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-white text-xl   hover:text-cyan-500 duration-500 " to="/" >Home</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-white text-xl  hover:text-cyan-500 duration-500 " to="/about" >About us </Link>
            </li>

            <li className="mx-4 my-6 md:my-0">
              <Link className="text-white text-xl  hover:text-cyan-500 duration-500 " to="/track" > Track Your Package </Link>
            </li>



          </ul>

          <ul className={`md:flex md:items-center  hidden lg:ml-[25%] lg:gap-5 md:ml-[18%] '} 
        absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-500`}>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-white text-xl   hover:text-cyan-500 duration-500 " to="/" >Home</Link>
            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-white text-xl  hover:text-cyan-500 duration-500 " to="/about" >About us </Link>

            </li>
            <li className="mx-4 my-6 md:my-0">
              <Link className="text-white text-xl  hover:text-cyan-500 duration-500 " to="/track" > Track Your Package </Link>

            </li>

            <li className="mx-4 my-6 md:my-0">
              {
                userEmail?<Link className="text-white text-xl  hover:text-cyan-500 duration-500 " to="/dashboard/" > Dashboard  </Link>
                   : <Link className="text-white text-xl  hover:text-cyan-500 duration-500 " to="/adlogin" > Admin Login  </Link>
              }

            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;