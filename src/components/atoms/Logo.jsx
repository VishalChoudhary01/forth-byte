import React from 'react'
import { AiFillRedditCircle } from "react-icons/ai";
import forthbytelogo from "../../assets/Logo/forthbyte.png";
const Logo = () => {
  return (
    <div className='flex items-center md:gap-x-2 '>
        <img src={forthbytelogo} alt="forth byte Logo"  className='rounded-full'/>
        <p className='font-Neonderthaw lg:text-[1.4rem] text-[1.2rem] font-medium'>Forth Byte</p>
    </div>
  )
}

export default Logo