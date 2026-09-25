import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Footer from '@/components/Footer/Footer'
import CatalogGrid from '@/components/Shop/CatalogGrid'
import { getCategories, getCategoryBySlug, getProductsByCategory } from '@/lib/catalog'

interface Props {
    params: { slug: string }
}

export function generateStaticParams() {
    return getCategories().map((category) => ({ slug: category.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
    const category = getCategoryBySlug(params.slug)
    if (!category) {
        return { title: 'Categoría no encontrada' }
    }
    return {
        title: category.name,
        description: category.description,
    }
}

export default function CategoriaDetalle({ params }: Props) {
    const category = getCategoryBySlug(params.slug)

    if (!category) {
        notFound()
    }

    const products = getProductsByCategory(category.slug)
    const categories = getCategories()

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
            </div>
            <CatalogGrid data={products} categories={categories} activeCategory={category.slug} heading={category.name} />
            <Footer />
        </>
    )
}
