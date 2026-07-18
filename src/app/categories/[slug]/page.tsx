import React from 'react'
import { categories } from '@/data/categories'

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  console.log(slug);

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    return <p>دسته‌بندی یافت نشد</p>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
    </div>
  );
}