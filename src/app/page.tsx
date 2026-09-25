import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Hero from '@/components/Home/Hero'
import CategoryBlocks from '@/components/Home/CategoryBlocks'
import FeaturedProducts from '@/components/Home/FeaturedProducts'
import Steps from '@/components/Home/Steps'
import Ambientes from '@/components/Home/Ambientes'
import BenefitsStrip from '@/components/Home/BenefitsStrip'
import Footer from '@/components/Footer/Footer'
import { getCategories, getFeaturedProducts } from '@/lib/catalog'

export default function Home() {
    const categories = getCategories()
    const featuredProducts = getFeaturedProducts()

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
            </div>
            <Hero />
            <CategoryBlocks data={categories} />
            <FeaturedProducts data={featuredProducts} />
            <Steps />
            <Ambientes />
            <BenefitsStrip />
            <Footer />
        </>
    )
}
