'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Product } from '@/types/product'
import ProductCard from '../card/ProductCard'
import Container from '../layout/Container'
import Title from '../ui/Title'

type BestSellerSwiperProps = {
    products: Product[]
}

export default function BestSellerSwiper({ products }: BestSellerSwiperProps) {
    return (
        <div className='py-8 w-full h-[90vh]'>
            <Container>
                <Title value='پرفروش‌های سافت‌دی'></Title>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={24}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard product={product} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </div>
    )
}