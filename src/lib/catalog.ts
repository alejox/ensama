import productData from '@/data/Product.json'
import categoryData from '@/data/Category.json'
import { ProductType } from '@/type/ProductType'
import { CategoryType } from '@/type/CategoryType'

const products = productData as ProductType[]
const categories = categoryData as CategoryType[]

/**
 * Mock-data catalog reads. This is the seam Supabase queries will replace in H2:
 * keep the same function names/shapes so callers do not need to change later.
 */
export function getProducts(): ProductType[] {
    return products
}

export function getProductBySlug(slug: string): ProductType | undefined {
    return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(categorySlug: string): ProductType[] {
    return products.filter((product) => product.category === categorySlug)
}

export function getFeaturedProducts(): ProductType[] {
    return products.filter((product) => product.featured)
}

export function getCategories(): CategoryType[] {
    return categories
}

export function getCategoryBySlug(slug: string): CategoryType | undefined {
    return categories.find((category) => category.slug === slug)
}
