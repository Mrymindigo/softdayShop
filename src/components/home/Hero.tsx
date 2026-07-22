"use client";

import Image from "next/image"
import Link from "next/link"
import { use } from "react"

function Hero() {
  return (

    // <div className='flex w-full h-screen'>

    //   <div className="relative w-full h-full">
    //     <Image
    //       src={'/banner/hero-1.png'}
    //       alt="hero image"
    //       priority
    //       fill
    //       sizes="50vw"
    //       quality={100}
    //       className="object-cover" />
    //   </div>
    //   <div className="heroDescription flex justify-center z-10">
    //     <div className="content  flex flex-col gap-8 w-[80%] justify-center items-start">
    //       <h2 className="text-5xl pb-6 text-[var(--color-text)]">آرامش از خانه شروع می‌شود</h2>
    //       <p className="text-lg pb-10 text-[var(--color-secondary-text)]">لباس‌های راحتی و خواب با طراحی مینیمال، برای صبح‌های آرام و شب‌های دلنشین</p>
    //       <Link href={'/products'} className="text-[16px] text-[var(--color-text)] bg-[var(--primary-blue)]/70 px-8 py-4 rounded-[var(--radius-xl)] hover:bg-[var(--primary-blue)] transition-[var(--transition-normal)]">مشاهده محصولات</Link>
    //     </div>
    //   </div>

    // </div>
     <div className='relative w-full h-screen'>

      <div className="absolute inset-0">
        <Image
          src={'/banner/hero-1.png'}
          alt="hero image"
          priority
          fill
          sizes="100vw"
          className="object-cover" />
      </div>

      <div className="heroDescription absolute inset-0 flex items-center justify-end z-10 px-16">
        <div className="content flex flex-col gap-8 w-[35%] justify-center items-start">
          <h2 className="text-5xl pb-6 text-[var(--color-text)]">آرامش از خانه شروع می‌شود</h2>
          <p className="text-lg pb-10 text-[var(--color-secondary-text)]">لباس‌های راحتی و خواب با طراحی مینیمال، برای صبح‌های آرام و شب‌های دلنشین</p>
          <Link href={'/products'} className="text-[16px] text-[var(--color-text)] bg-[var(--primary-blue)]/70 px-8 py-4 rounded-[var(--radius-xl)] hover:bg-[var(--primary-blue)] transition-[var(--transition-normal)] shadow-lg shadow-[var(--primary-blue)]/30 hover:shadow-xl hover:shadow-[var(--primary-blue)]/40 ">مشاهده محصولات</Link>
        </div>
      </div>

    </div>
  )
}

export default Hero
