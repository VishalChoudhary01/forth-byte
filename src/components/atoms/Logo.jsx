import forthbytelogo from "../../assets/Logo/forthbyte.png";
const Logo = () => {
  return (
    <div className='flex items-center md:gap-x-2 '>
        <img src={forthbytelogo} alt="forth byte Logo"  className='rounded-full md:w-[2.5rem] md:h-[2.5rem]   h-[2rem] w-[2rem]'/>
        <p className='font-RobotoMono lg:text-[1.4rem] md:text-[1.3rem] text-[1.2rem] font-semibold'>Forth Byte</p>
    </div>
  )
}

export default Logo