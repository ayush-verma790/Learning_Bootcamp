import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


export default function Header() {
    const [toggle ,setToggle]=useState(false);
  return (
    <div className="bg-[#2699fb] p-4 shadow">
      <div className="max-w-[1240px]   flex justify-between">
        <div className="text-4xl font-bold shadow">Xcelore.</div>

        {
            toggle?
            <IoMdClose  onClick={()=>setToggle(!toggle)} className="text-white text-3xl md:hidden block" />:
            <AiOutlineMenu  onClick={()=>setToggle(!toggle)} className="text-white text-3xl md:hidden block"/>
        }
        
    
        <ul className="hidden md:flex text-white gap-6">
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Contact Us</li>
        </ul>
        {/* Responsive  */}
        <ul className="md:hidden w-full bg-black fixed text-white gap-6 top-[73px] left-[-100%]">
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}
