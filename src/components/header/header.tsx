import Image from "next/image"
import { useState, useEffect } from 'react'
import { FiUser } from 'react-icons/fi' 
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBell } from "react-icons/bs"
import Link from "next/link"


const Header = () => {

  const [scrolled, setscrolled] = useState(false)


  useEffect( () => {
    const handeleScoll = () => {
      if(window.scrollY > 0) {
        setscrolled(true)
      } else {
        setscrolled(false)
      }
    }
    
    window.addEventListener('scroll', handeleScoll)


    return () => window.removeEventListener('scroll', handeleScoll )
  }, [])

  return (
    <header className={`${scrolled && 'bg-[#e10856]'}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
          <Image src={"/logo.svg"} alt={"logo"} width={56} height={56} />

          <ul className="space-x-4 md:flex hidden">
            <li className="navLink">Home</li>
            <li className="navLink">Movies</li>
            <li className="navLink">Tv Shov</li>
            <li className="navLink">New</li>
            <li className="navLink">Popular</li>
          </ul>     
      </div>
  
      <div className="flex items-center justify-center space-x-4 text-sm font-light">
        <AiOutlineSearch className=" h-6 w-6 cursor-pointer "/>
        <p className=" hidden lg:inline cursor-pointer ">Kids</p>
        <BsBell  className=" h-6 w-6 cursor-pointer"/>
        <Link href={"/accaunt"}>
        <FiUser className=" h-6 w-6 cursor-pointer "/>
        </Link>
      </div>
    </header>
  )
}

export default Header