import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import Default from '@/components/Product/Detail/Default'
import { getProducts, getProductBySlug, getProductsByCategory, getCategoryBySlug } from '@/lib/catalog'

interface Props {
    params: { slug: string }
}

export function generateStaticParams() {
    return getProducts().map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
    const product = getProductBySlug(params.slug)
    if (!product) {
        return { title: 'Producto no encontrado' }
    }
    return {
        title: product.name,
        description: product.description,
    }
}

export default function ProductoDetalle({ params }: Props) {
    const product = getProductBySlug(params.slug)

    if (!product) {
        notFound()
    }

    const related = getProductsByCategory(product.category).filter((item) => item.id !== product.id)
    const categoryName = getCategoryBySlug(product.category)?.name ?? product.category

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
                <Breadcrumb heading={product.name} subHeading={product.name} />
            </div>
            <Default product={product} categoryName={categoryName} related={related} />
            <Footer />
        </>
    )
}
