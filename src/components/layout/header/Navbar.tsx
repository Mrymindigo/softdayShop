"use client"
import React from 'react'
import { IoChevronDown } from "react-icons/io5"
import Link from 'next/link'
import { categories } from '@/data/categories'

export const navItems = [
  { label: 'خانه', href: '/', hasDropdown: false },
  {
    label: 'دسته‌بندی ها',
    href: '/products',
    hasDropdown: true,
  },
  { label: 'درباره ما', href: '/aboutUs', hasDropdown: false },
  { label: 'تماس با ما', href: '/contactUs', hasDropdown: false },
]

function Navbar() {
  return (
    <div className='flex gap-10 text-[16px] text-[var(--color-text)] font-medium tracking-wide'>
      {categories.map((item) => (
        <div key={item.name} className='relative group py-2'>
          <Link href={`/categories/${item.slug}`} className='flex items-center gap-1 cursor-pointer select-none'>
            <span>{item.name}</span>
          </Link>
          <span
            className='pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[var(--color-secondary-text)] transition-all duration-300 ease-out group-hover:w-full'
          />
        </div>
      ))}
    </div>
  )
}

export default Navbar
