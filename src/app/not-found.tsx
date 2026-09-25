import React from 'react'
import Link from 'next/link'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Footer from '@/components/Footer/Footer'

export default function NotFound() {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
            </div>
            <div className="not-found-block md:py-20 py-10">
                <div className="container flex flex-col items-center text-center gap-y-4">
                    <div className="heading2">404</div>
                    <div className="body1 text-secondary">No encontramos la página que buscas.</div>
                    <Link href="/productos" className="button-main mt-4">Ver catálogo</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}
