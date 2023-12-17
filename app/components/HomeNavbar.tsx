'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import Link from 'next/link'
import Button from './Button'
import { IoMenu } from "react-icons/io5";
import { useRouter } from 'next/navigation'


const HomeNavbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter()


  const handleClick = () => {
    router.push('/login')
  }


  const menu = [
    {
      id : '1',
      label : 'Home',
      href: '/'
    },
    {
      id : '2',
      label : 'About',
      href: '/About'
    },
    {
      id : '3',
      label : 'Contact',
      href: '/Contact'
    },
    {
      id : '4',
      label : 'Profile',
      href: '/profile'
    },
  
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    
    <nav
      className={`w-[100vw] flex justify-between items-center px-10 md:px-24 py-7 fixed z-10 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
        <div className=' flex  cursor-pointer  relative '>
           <Link className='flex items-center justify-center gap-1 flex-row' href={'/'}><Image className=''  alt='logo' src={logo} />
           <h1 className='text-white font-bold text-3xl'>LOGO</h1>
           </Link> 
        </div>
        <div className="items-center justify-center gap-16 hidden md:flex">
           <ul className='flex flex-row gap-5 '>
            {menu.map((link) => (
              <li className='text-white text-lg font-normal cursor-pointer' key={link.id} ><Link href={link.href}>{link.label}</Link></li>
            ))}
           </ul>
        <div className='flex w-24 '>
        
            <Button type='button' outline label='Signin' onClick={handleClick}/>
        
        </div>
       
        </div>
        <div className="dropdown flex md:hidden">
            <div className='flex justify-center text-white items-center'><IoMenu /></div>
        </div>
    </nav>
  
  )
}

export default HomeNavbar
