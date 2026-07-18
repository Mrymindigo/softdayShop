import React from 'react'


interface ContainerProps {
    children: React.ReactNode;
}

export default function Container(
    { children, }: ContainerProps) {
    return (
        <div className='mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8'>
            {children}
        </div>
    )
}
