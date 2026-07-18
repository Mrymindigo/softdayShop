import React from 'react'
import { AiOutlineCloud } from "react-icons/ai";

export default function Logo() {
    return (
        <div className='flex gap-1 items-center'>
            <span className='text-[#5B6470] text-2xl font-semibold'>SOFTDAY</span>
            <AiOutlineCloud size={48} color='#B8D9E8' />
        </div>
    )
}
