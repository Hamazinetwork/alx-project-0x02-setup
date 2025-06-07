import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
   <nav>
    <ul className='flex justify-l gap-10 bg-blue-200 p-4'>
      <li><Link href="/home" className='text-lg font-bold'>Home</Link></li>
      <li><Link href="/about" className='text-lg font-bold'>About</Link></li>
      <li><Link href="/posts" className='text-lg font-bold'>Posts</Link></li>
    </ul>
   </nav>
  )
}

export default Header
