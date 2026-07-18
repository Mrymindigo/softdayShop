'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoClose, IoChevronDown } from 'react-icons/io5'
import { categories } from '@/data/categories'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null)

    // جلوگیری از اسکرول پس‌زمینه وقتی منو بازه
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    const toggleDropdown = (label: string) => {
        setOpenDropdown((prev) => (prev === label ? null : label))
    }

    return (
        <>
            {/* overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            />

            {/* panel */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[80%] max-w-[320px] bg-white shadow-2xl
        transition-transform duration-300 ease-out md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className='flex items-center justify-between px-5 h-20 border-b border-gray-100'>
                    <span className='text-lg font-semibold text-[var(--color-text)]'>منو</span>
                    <button onClick={onClose} aria-label='بستن منو'>
                        <IoClose size={26} color='var(--color-text)' />
                    </button>
                </div>

                <nav className='flex flex-col px-5 py-2 overflow-y-auto h-[calc(100%-5rem)]'>
                    {categories.map((item) => (
                        <div key={item.name} className='border-b border-gray-50'>
                            <div className='flex items-center justify-between'>
                                <Link
                                    href={`/categories/${item.slug}`}
                                    onClick={onClose}
                                    className='flex-1 py-3 text-[var(--color-text)] font-medium'
                                >
                                    {item.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    )
}

export default MobileMenu