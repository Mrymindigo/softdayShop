import { Product } from '@/types/product'
import {Category} from '@/data/categories'

export function getFeaturedBestSellers(
  products: Product[],
  categories : Category[],
  limit: number = 4
): Product[] {
    
  const featured: Product[] = []

  for (const category of categories) {
    if (featured.length >= limit) break

    const bestSeller = products.find(
      (p) => p.category === category.slug && p.isBestSeller
    )

    if (bestSeller) featured.push(bestSeller)
  }


  return featured
}