import React from 'react';
import 'C:/Users/Q1/Desktop/sikayetvar/styles/globals.css'
import Logo from 'C:/Users/Q1/Desktop/sikayetvar/img/NavLogo.png'
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts"
};

const Navbar = () => {
  return (
    <nav className='Nav flex justify-between items-center p-5 font-sans	'>
      <ul className="flex list-none w-full h-35 justify-between">
        <span className="w-60 flex justify-between items-center ml-3 ml-20">
          <li className="font-semibold w-32"><img src={Logo.src} alt="" /></li>
          <li className="text-red-500  text-xl  font-bold ">Şikayətlər</li>
        </span>

        <span className="w-60 flex justify-between items-center mr-10">
          <li>Haqqımızda</li>
          <li>
            <a href="#" className="text-white py-3 px-3 bg-pink rounded-full pt-2">
              Login/Sign Up
            </a>
          </li>
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
