import React from 'react'
import Link from 'next/link'
import Product from '@/components/Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: ProductType[]
}

const FeaturedProducts: React.FC<Props> = ({ data }) => {
    if (data.length === 0) {
        return null
    }

    return (
        <div className="featured-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading flex flex-col items-center text-center">
                    <div className="heading3">Productos destacados</div>
                </div>
                <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                    {data.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
                <div className="flex items-center justify-center md:mt-10 mt-6">
                    <Link href="/productos" className="button-main bg-white text-black border border-black text-center">Ver todo el catálogo</Link>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts
