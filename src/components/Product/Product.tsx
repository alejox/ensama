'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { formatCOP } from '@/lib/format'

interface ProductProps {
    data: ProductType
}

const Product: React.FC<ProductProps> = ({ data }) => {
    const { addToCart, updateCart, cartState } = useCart();
    const { openModalCart } = useModalCartContext()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (!cartState.cartArray.find(item => item.id === data.id)) {
            addToCart({ ...data });
            updateCart(data.id, data.quantityPurchase, data.finishes[0]?.name ?? '')
        } else {
            updateCart(data.id, data.quantityPurchase, data.finishes[0]?.name ?? '')
        }
        openModalCart()
    };

    return (
        <div className="product-item grid-type style-1">
            <Link href={`/productos/${data.slug}`} className="product-main cursor-pointer block">
                <div className="product-thumb bg-white relative overflow-hidden rounded-2xl">
                    {data.stockPolicy === 'made_to_order' && (
                        <div className="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">
                            Sobre pedido
                        </div>
                    )}
                    <div className="product-img w-full h-full aspect-[3/4]">
                        {data.thumbImage.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                width={500}
                                height={500}
                                priority={true}
                                alt={data.name}
                                className='w-full h-full object-cover duration-700'
                            />
                        ))}
                    </div>
                    <div className="list-action px-5 absolute w-full bottom-5 max-lg:hidden">
                        <div
                            className="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white"
                            onClick={handleAddToCart}
                        >
                            Agregar al carrito
                        </div>
                    </div>
                    <div className="list-action-icon flex items-center justify-center gap-2 absolute w-full bottom-3 z-[1] lg:hidden">
                        <div
                            className="add-cart-btn w-9 h-9 flex items-center justify-center rounded-lg duration-300 bg-white hover:bg-black hover:text-white"
                            onClick={handleAddToCart}
                        >
                            <Icon.ShoppingBagOpen className='text-lg' />
                        </div>
                    </div>
                </div>
                <div className="product-infor mt-4 lg:mb-7">
                    <div className="product-name text-title duration-300">{data.name}</div>
                    <div className="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
                        <div className="product-price text-title">{formatCOP(data.price)}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Product
