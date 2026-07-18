export interface Category {
  id: number;
  slug: string;
  name: string;
  img: string;
}

export const categories: Category[] = [
  {
    id: 1,
    slug: 'home-sets',
    name: 'ست خانگی',
    img: '/categoryBanner/pejama-category-banner.jpg',
  },
  {
    id: 2,
    slug: 'tshirt',
    name: 'تیشرت',
    img: '/categoryBanner/Tshirt-category-banner.jpg',
  },
  {
    id: 3,
    slug: 'crop-top',
    name: 'کراپ/تاپ',
    img: '/categoryBanner/top-category-banner.jpg',
  },
  {
    id: 4,
    slug: 'pants-skirt',
    name: 'شلوار/دامن',
    img: '/categoryBanner/skirt-category-banner.jpg',
  },
  {
    id: 5,
    slug: 'accessory',
    name: 'اکسسوری',
    img: '/categoryBanner/accessory-category-banner.jpg',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
