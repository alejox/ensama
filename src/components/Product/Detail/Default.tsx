'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ProductType } from '@/type/ProductType'
import Product from '../Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import { useCart } from '@/context/CartContext'
import { useModalCartContext } from '@/context/ModalCartContext'
import { formatCOP } from '@/lib/format'

SwiperCore.use([Navigation, Thumbs]);

const stockPolicyLabel: Record<ProductType['stockPolicy'], string> = {
    stock: 'Disponible en stock',
    made_to_order: 'Fabricado sobre pedido',
}

interface Props {
    product: ProductType
    categoryName: string
    related: ProductType[]
}

const Default: React.FC<Props> = ({ product, categoryName, related }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const [activeFinish, setActiveFinish] = useState<string>(product.finishes[0]?.name ?? '')
    const [quantity, setQuantity] = useState<number>(1)
    const { addToCart, updateCart, cartState } = useCart()
    const { openModalCart } = useModalCartContext()

    const handleIncreaseQuantity = () => {
        setQuantity((q) => q + 1)
    };

    const handleDecreaseQuantity = () => {
        setQuantity((q) => (q > 1 ? q - 1 : q))
    };

    const handleAddToCart = () => {
        if (!cartState.cartArray.find(item => item.id === product.id)) {
            addToCart({ ...product });
            updateCart(product.id, quantity, activeFinish)
        } else {
            updateCart(product.id, quantity, activeFinish)
        }
        openModalCart()
    };

    return (
        <>
            <div className="product-detail default">
                <div className="featured-product underwear md:py-20 py-10">
                    <div className="container flex justify-between gap-y-6 flex-wrap">
                        <div className="list-img md:w-1/2 md:pr-[45px] w-full">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[Thumbs]}
                                className="mySwiper2 rounded-2xl overflow-hidden"
                            >
                                {product.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item}
                                            width={1000}
                                            height={1000}
                                            alt={product.name}
                                            className='w-full aspect-[3/4] object-cover'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                onSwiper={(swiper) => setThumbsSwiper(swiper)}
                                spaceBetween={0}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {product.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={item}
                                            width={1000}
                                            height={1000}
                                            alt={product.name}
                                            className='w-full aspect-[3/4] object-cover rounded-xl'
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="product-infor md:w-1/2 w-full lg:pl-[15px] md:pl-2">
                            <div>
                                <div className="caption2 text-secondary font-semibold uppercase">{categoryName}</div>
                                <div className="heading4 mt-1">{product.name}</div>
                            </div>
                            <div className="flex items-center gap-3 flex-wrap mt-5 pb-6 border-b border-line">
                                <div className="product-price heading5">{formatCOP(product.price)}</div>
                                <div className='desc text-secondary mt-3'>{product.description}</div>
                            </div>
                            <div className="list-action mt-6">
                                {product.finishes.length > 0 && (
                                    <div className="choose-color">
                                        <div className="text-title">Acabado: <span className='text-title color'>{activeFinish}</span></div>
                                        <div className="list-color flex items-center gap-2 flex-wrap mt-3">
                                            {product.finishes.map((item, index) => (
                                                <div
                                                    className={`color-item w-12 h-12 rounded-xl duration-300 relative ${activeFinish === item.name ? 'active' : ''}`}
                                                    key={index}
                                                    onClick={() => setActiveFinish(item.name)}
                                                >
                                                    <Image
                                                        src={item.image}
                                                        width={100}
                                                        height={100}
                                                        alt={item.name}
                                                        className='rounded-xl'
                                                    />
                                                    <div className="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                                                        {item.name}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <div className="text-title mt-5">Cantidad:</div>
                                <div className="choose-quantity flex items-center lg:justify-between gap-5 gap-y-3 mt-3">
                                    <div className="quantity-block md:p-3 max-md:py-1.5 max-md:px-3 flex items-center justify-between rounded-lg border border-line sm:w-[180px] w-[120px] flex-shrink-0">
                                        <Icon.Minus
                                            size={20}
                                            onClick={handleDecreaseQuantity}
                                            className={`${quantity === 1 ? 'disabled' : ''} cursor-pointer`}
                                        />
                                        <div className="body1 font-semibold">{quantity}</div>
                                        <Icon.Plus
                                            size={20}
                                            onClick={handleIncreaseQuantity}
                                            className='cursor-pointer'
                                        />
                                    </div>
                                    <div onClick={handleAddToCart} className="button-main w-full text-center bg-white text-black border border-black">Agregar al carrito</div>
                                </div>
                            </div>
                            <div className="more-infor mt-8 pb-8 border-b border-line">
                                <div className="item flex items-center gap-1 mt-1">
                                    <Icon.Ruler className='body1' />
                                    <div className="text-title">Medidas:</div>
                                    <div className="text-secondary">
                                        {product.dimensions.widthCm} x {product.dimensions.heightCm} x {product.dimensions.depthCm} cm (an x al x prof)
                                    </div>
                                </div>
                                <div className="item flex items-center gap-1 mt-3">
                                    <Icon.Cube className='body1' />
                                    <div className="text-title">Material:</div>
                                    <div className="text-secondary">{product.material}</div>
                                </div>
                                <div className="item flex items-center gap-1 mt-3">
                                    <Icon.Timer className='body1' />
                                    <div className="text-title">Disponibilidad:</div>
                                    <div className="text-secondary">
                                        {stockPolicyLabel[product.stockPolicy]}
                                        {product.stockPolicy === 'made_to_order' && ` · tiempo de fabricación: ${product.leadTimeDays} días`}
                                    </div>
                                </div>
                            </div>
                            <div className="get-it mt-6 pb-8 border-b border-line">
                                <div className="heading6">Contenido de la caja</div>
                                <ul className="list-disc pl-5 mt-3">
                                    {product.boxContents.map((content, index) => (
                                        <li key={index} className="text-secondary mt-1">{content}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="get-it mt-6 pb-8 border-b border-line">
                                <div className="item mt-2">
                                    <div className="text-title">Cuidado</div>
                                    <div className="caption1 text-secondary mt-1">{product.care}</div>
                                </div>
                                <div className="item mt-4">
                                    <div className="text-title">Instalación</div>
                                    <div className="caption1 text-secondary mt-1">{product.installation}</div>
                                </div>
                            </div>
                            {related.length > 0 && (
                                <div className="list-product hide-product-sold menu-main mt-6">
                                    <div className="heading5 pb-4">También te puede interesar</div>
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        {related.slice(0, 4).map((item) => (
                                            <Product key={item.id} data={item} />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Default
