// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// import { Product } from '@/types/product'

// type ProductCardProps = {
//   product: Product
// }

// function ProductCard({ product }: ProductCardProps) {

//   return (
//     <div className='flex justify-center items-center'>
//       <Link href={`/products/${product.slug}`} className='flex flex-col w-full h-full rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 overflow-hidden'>
//       <div className="productImg group relative overflow-hidden">
//         <Image
//           src={product.images[0]}
//           alt='product image'
//           width={600}
//           height={300}
//           className="transition-opacity duration-500 group-hover:opacity-0 object-cover"
//         />
//         <Image

//           src={product.images[1]}
//           alt='hover image'
//           width={100}
//           height={200}
//           className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
//         />
//       </div>
//       <div className="info">
//         <h1 className='productTitle'>{product.title}</h1>
//         <span>
//           {product.price.toLocaleString()} تومان
//         </span>
//       </div>
//       <button></button>
//       </Link>
//     </div>
//   )
// }

// export default ProductCard


'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Product } from '@/types/product'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="flex flex-col w-full h-full rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 overflow-hidden"
    >
      {/* عکس - ۲/۳ ارتفاع کارت */}
      <div className="relative w-full aspect-[3/4] flex-shrink-0 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={product.images[1]}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="absolute inset-0 object-cover opacity-0 transition-opacity duration-500 hover:opacity-100"
        />
      </div>

      {/* اطلاعات - ۱/۳ ارتفاع کارت */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div className="flex flex-col gap-1">
          <h1 className="productTitle text-sm font-medium text-gray-800">
            {product.title}
          </h1>
          <span className="text-sm text-gray-500">
            {product.price.toLocaleString()} تومان
          </span>
        </div>

        <button
          className="mt-3 w-full py-2 text-xs border border-gray-300 rounded-full
                     text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900
                     transition-colors duration-300"
        >
          افزودن به سبد خرید
        </button>
      </div>
    </Link>
  )
}

export default ProductCard
