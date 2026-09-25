import React from 'react'
import type { Metadata } from 'next'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Footer from '@/components/Footer/Footer'
import CatalogGrid from '@/components/Shop/CatalogGrid'
import { getProducts, getCategories } from '@/lib/catalog'

export const metadata: Metadata = {
    title: 'Catálogo',
    description: 'Muebles ENSAMA fáciles de enviar e instalar: baño, repisas, espejos y organización.',
}

export default function Productos() {
    const products = getProducts()
    const categories = getCategories()

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
            </div>
            <CatalogGrid data={products} categories={categories} heading='Catálogo' />
            <Footer />
        </>
    )
}
