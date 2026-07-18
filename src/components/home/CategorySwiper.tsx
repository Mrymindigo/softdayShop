import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from 'next/image';
import { categories } from '@/data/categories'
import "swiper/css";
import Link from 'next/link';

function CategorySwiper() {

    // const categories = [
    //     { id: 1, href:'/', img: '/categoryBanner/pejama-category-banner.jpg', name: 'ست خانگی' },
    //     { id: 2, href:'/', img: '/categoryBanner/Tshirt-category-banner.jpg', name: 'تیشرت' },
    //     { id: 3, href:'/', img: '/categoryBanner/top-category-banner.jpg', name: 'کراپ/تاپ' },
    //     { id: 4, href:'/', img: '/categoryBanner/skirt-category-banner.jpg', name: 'شلوار/دامن' },
    //     { id: 5, href:'/', img: '/categoryBanner/accessory-category-banner.jpg', name: 'اکسسوری' }
    // ]
    return (
        <div className="w-full max-w-5xl mx-auto pb-8">
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={30}
                autoplay={{ delay: 1800, disableOnInteraction: false }}
                loop
                className="flex items-center"
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {categories.map((category) => (
                    <SwiperSlide key={category.id}>
                        <Link href={`/categories/${category.slug}`}>
                            <div className="flex flex-col items-center">
                                <div className="relative overflow-hidden w-24 h-24 flex items-center justify-center rounded-full shadow-md hover:shadow-xl transition transform hover:scale-105">
                                    <Image
                                        src={category.img}
                                        alt={category.name}
                                        fill
                                        sizes="96px"
                                        priority
                                        className='object-cover rounded-full'
                                    />
                                </div>
                                <p className="mt-3 text-[var(--color-text)] font-semibold text-lg">{category.name}</p>
                            </div>
                        </Link>
                    </SwiperSlide>

                ))}
            </Swiper>
        </div>
    )
}

export default CategorySwiper
