import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart, FaLinux, FaBars, FaTimes } from 'react-icons/fa'
import MyCart from './MyCart'

const MyNavbar = ({ cart, increment, decrement, removeItem, clearCart, checkOut }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen((prev) => !prev);
  }

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  const linkClass = ({ isActive }) =>
    isActive 
    ? 'text-lg font-bold px-5 py-2 border-b-4 border-transparent border-violet-700 transition duration-300 text-violet-700 hover:text-violet-900' 
    : 'text-lg font-thin px-5 py-2 border-b-4 border-transparent hover:border-violet-400 transition duration-300 text-violet-700 hover:text-violet-900'

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4 shadow-md flex justify-between items-center bg-white">
      <div className='flex items-center'>
        {/* <FaBasketballBall to='/' className='text-3xl text-violet-900' /> */}
        <FaLinux to='/' className='text-6xl text-violet-900' />
        <h1 className='text-2xl italic font-thin bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
          CasualHubs
        </h1>
      </div>

      <div className='flex items-center md:hidden'>
        {isMenuOpen ? (
          <FaTimes onClick={handleToggleMenu} className='text-4xl text-violet-900 cursor-pointer hover:text-violet-600 z-50' />
        ) : (
          <FaBars onClick={handleToggleMenu} className='text-4xl text-violet-900 cursor-pointer hover:text-violet-600' />
        )}
      </div>

      <div className={`md:flex items-center md:-top-60 transition-all duration-300 ${isMenuOpen ? 'absolute top-0 right-0 flex-col flex items-center gap-8 bg-white rounded p-6 mt-24 shadow-md shadow-violet-500 w-1/2' : 'hidden'} md:gap-10`}>
        <div className={`navlink flex gap-20 ${ isMenuOpen ? 'flex-col items-center' : 'flex'} `}>
          <NavLink to='/' className={linkClass}>
            Home
          </NavLink>
          <NavLink to='/products' className={linkClass}>
            Products
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            About
          </NavLink>
        </div>
        <div className={`p-4 bg-violet-100 hover:bg-violet-200 cursor-pointer rounded ${ isMenuOpen ? '' : ''}`} onClick={handleToggleCart} >
          <div className='relative'>
            <FaShoppingCart className='text-2xl text-violet-900' />
            <span className='absolute -top-3 -right-4 px-2 bg-gradient-to-b from-violet-800 to-pink-500 text-white rounded-full'>{cart.length}</span>
          </div>
        </div>
      </div>
      {isCartOpen && (
        <div className="absolute top-0 right-0 md:w-full lg:w-1/2 h-auto shadow-md shadow-violet-300 bg-white z-50">
          <MyCart 
            onClose={() => setIsCartOpen(false)} 
            cart={cart} 
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            clearCart={clearCart}
            checkOut={checkOut} 
            />
        </div>
      )}
    </nav>
  )
}

export default MyNavbar