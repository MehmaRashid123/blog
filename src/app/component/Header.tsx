import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto mt-[-30px] flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img 
      className="w-28"
      src="/image/logo (2).png" 
      alt="" />
      <span className="ml-3 text-xl">MEHMA</span>
    
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" href="/Blog">Blog</Link>
      <Link className="mr-5 hover:text-gray-900" href="/About">About</Link>
      <Link className="mr-5 hover:text-gray-900" href="/Contact">Contact Us</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header