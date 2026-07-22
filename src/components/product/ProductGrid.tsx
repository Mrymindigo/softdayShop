import React from 'react'
import { Product } from '@/types/product'
import ProductCard from '../card/ProductCard'
// import { getProducts } from '@/services/product-services'
import Container from '../layout/Container'


type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({products =[]}: ProductGridProps) {
  return (
    <Container>
      <div className="flex gap-6">

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
      
    </div>
    </Container>
  );
}
