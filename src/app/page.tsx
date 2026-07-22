import Category from "@/components/home/Category";
import Hero from "@/components/home/Hero";
import Header from '@/components/layout/header'
import {products} from '@/data/products'
import {categories} from '@/data/categories'
import ProductBestSellerSwiper from '../components/product/ProductBestSellerSwiper'
import { getFeaturedBestSellers } from "@/lib/getFeaturedProducts"

export default function Home() {
  const featuredProducts = getFeaturedBestSellers(products, categories, 4)

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Category></Category>
      <ProductBestSellerSwiper products={featuredProducts}/>
      <div></div>
    </div>
  );
}
