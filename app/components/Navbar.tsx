import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-[100vw] flex md:items-start items-center justify-center md:justify-start'>
        <div className=' flex  cursor-pointer  relative pt-[2rem] md:pl-[6.5rem]'>
           <Link className='flex items-center justify-center gap-1 flex-row' href={'/'}><Image className=''  alt='logo' src={logo} />
           <h1 className='text-white font-bold text-3xl'>LOGO</h1>
           </Link> 
        </div>
    </nav>
  )
}

export default Navbar
