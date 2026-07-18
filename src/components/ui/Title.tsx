import React from 'react'
import Link from 'next/link'
import { RiArrowLeftSLine } from "react-icons/ri";

interface TitleProps {
  value: string
}

function Title({ value }: TitleProps) {
  return (
    <div className="title flex justify-between items-center pb-9">
      <h3 className='text-xl text-[var(--color-text)] relative font-bold'>{value}</h3>
      <div>
        {/* <Link href={'/products'} className='text-[var(--color-secondary-text)]'>مشاهده همه</Link> */}
        <Link
          href={'/products'}
          className="group relative inline-flex items-center gap-1 text-[var(--color-secondary-text)]"
        >
          <span>مشاهده همه</span>
          <RiArrowLeftSLine />

          <span className="absolute -bottom-1 left-0 h-[1px] w-full bg-[var(--color-secondary-text)] origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-90" />
        </Link>
      </div>
    </div>
  )
}

export default Title