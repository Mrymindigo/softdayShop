"use client"

import React , {useState}from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import HeaderAction from './HeaderAction'
import MobileMenu from '../MobileMenu'
import Container from '../Container'
import { IoMenuOutline } from 'react-icons/io5'


export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className=' bg-white sticky
    top-0
    z-50
    transition-all
    duration-300
'>
      <Container>
        <div className='flex justify-between items-center h-20'>
          <div className='grid grid-cols-3 items-center h-full md:hidden'>
            <button
              onClick={() => setIsMenuOpen(true)}
              className='justify-self-start'
              aria-label='باز کردن منو'
            >
              <IoMenuOutline size={28} color='var(--color-text)' />
            </button>

            <div className='justify-self-center'>
              <Logo />
            </div>

            <div className='justify-self-end'>
              <HeaderAction />
            </div>
          </div>
          <div className='hidden lg:flex w-full justify-between items-center h-full'>
            <Logo></Logo>
            <Navbar></Navbar>
            <HeaderAction></HeaderAction>
          </div>
        </div>

        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </Container>
    </header>
  )
}
