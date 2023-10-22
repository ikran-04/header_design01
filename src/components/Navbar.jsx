import React from 'react'

const Navbar = () => {
  return (
    <div className='py-8 flex justify-between items- z-40'>
        <div className='flex items-center space-x-8'>
            <img src="/gitlab.png" alt="" className='w-8 h-8' />
            <span className='text-gray-400'>
              |
            </span>
            <ul className='hidden md:flex items-center space-x-8'>
                <li className='font-semibold space-x-8'>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </div>
        <div>
        <ul className='flex space-x-2 md:space-x-8'>
                <li className='flex items-center space-x-2'>
                  <img src="/login.png" alt="" className='w-4 h-4 '/>
                <span>Login</span>
                  </li>
                  <span>|</span>
                  <li className='flex items-center space-x-2'>
                  <img src="/search.png" alt="" className='w-4 h-4 '/>
                <span>Search</span>
                  </li>
                  <span>|</span>
<li className='flex items-center space-x-2'>
                  <img src="/basket.png" alt="" className='w-4 h-4 '/>
                <span>Basket</span>
                  </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar