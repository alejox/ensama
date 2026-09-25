'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { getProducts } from '@/lib/catalog'
import { ProductType } from '@/type/ProductType';
import { formatCOP } from '@/lib/format'
import { useModalCartContext } from '@/context/ModalCartContext'
import { useCart } from '@/context/CartContext'

const productData = getProducts()

const ModalCart = () => {
    const [activeTab, setActiveTab] = useState<string | undefined>('')
    const { isModalOpen, closeModalCart } = useModalCartContext();
    const { cartState, addToCart, removeFromCart, updateCart } = useCart()

    const handleAddToCart = (productItem: ProductType) => {
        if (!cartState.cartArray.find(item => item.id === productItem.id)) {
            addToCart({ ...productItem });
            updateCart(productItem.id, productItem.quantityPurchase, '')
        } else {
            updateCart(productItem.id, productItem.quantityPurchase, '')
        }
    };

    const handleActiveTab = (tab: string) => {
        setActiveTab(tab)
    }

    let [totalCart, setTotalCart] = useState<number>(0)

    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    return (
        <>
            <div className={`modal-cart-block`} onClick={closeModalCart}>
                <div
                    className={`modal-cart-main flex ${isModalOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="left w-1/2 border-r border-line py-6 max-md:hidden">
                        <div className="heading5 px-6 pb-3">También te puede interesar</div>
                        <div className="list px-6">
                            {productData.slice(0, 4).map((product) => (
                                <div key={product.id} className='item py-5 flex items-center justify-between gap-3 border-b border-line'>
                                    <div className="infor flex items-center gap-5">
                                        <div className="bg-img">
                                            <Image
                                                src={product.images[0]}
                                                width={300}
                                                height={300}
                                                alt={product.name}
                                                className='w-[100px] aspect-square flex-shrink-0 rounded-lg'
                                            />
                                        </div>
                                        <div className=''>
                                            <div className="name text-button">{product.name}</div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <div className="product-price text-title">{formatCOP(product.price)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="text-xl bg-white w-10 h-10 rounded-xl border border-black flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                                        onClick={e => {
                                            e.stopPropagation();
                                            handleAddToCart(product)
                                        }}
                                    >
                                        <Icon.Handbag />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right cart-block md:w-1/2 w-full py-6 relative overflow-hidden">
                        <div className="heading px-6 pb-3 flex items-center justify-between relative">
                            <div className="heading5">Carrito de compras</div>
                            <div
                                className="close-btn absolute right-6 top-0 w-6 h-6 rounded-full bg-surface flex items-center justify-center duration-300 cursor-pointer hover:bg-black hover:text-white"
                                onClick={closeModalCart}
                            >
                                <Icon.X size={14} />
                            </div>
                        </div>
                        <div className="list-product px-6 mt-3">
                            {cartState.cartArray.length < 1 ? (
                                <p className='text-secondary'>Tu carrito está vacío.</p>
                            ) : (
                                cartState.cartArray.map((product) => (
                                    <div key={product.id} className='item py-5 flex items-center justify-between gap-3 border-b border-line'>
                                        <div className="infor flex items-center gap-3 w-full">
                                            <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                                                <Image
                                                    src={product.images[0]}
                                                    width={300}
                                                    height={300}
                                                    alt={product.name}
                                                    className='w-full h-full'
                                                />
                                            </div>
                                            <div className='w-full'>
                                                <div className="flex items-center justify-between w-full">
                                                    <div className="name text-button">{product.name}</div>
                                                    <div
                                                        className="remove-cart-btn caption1 font-semibold text-red underline cursor-pointer"
                                                        onClick={() => removeFromCart(product.id)}
                                                    >
                                                        Quitar
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-2 mt-3 w-full">
                                                    <div className="flex items-center text-secondary2 capitalize">
                                                        {product.selectedFinish || product.finishes[0]?.name || ''}
                                                    </div>
                                                    <div className="product-price text-title">{formatCOP(product.price)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="footer-modal bg-white absolute bottom-0 left-0 w-full">
                            <div className="flex items-center justify-center lg:gap-14 gap-8 px-6 py-4 border-b border-line">
                                <div
                                    className="item flex items-center gap-3 cursor-pointer"
                                    onClick={() => handleActiveTab('note')}
                                >
                                    <Icon.NotePencil className='text-xl' />
                                    <div className="caption1">Nota</div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-6 px-6">
                                <div className="heading5">Subtotal</div>
                                <div className="heading5">{formatCOP(totalCart)}</div>
                            </div>
                            <div className="block-button text-center p-6">
                                <div className="flex items-center gap-4">
                                    <Link
                                        href={'/carrito'}
                                        className='button-main basis-1/2 bg-white border border-black text-black text-center uppercase'
                                        onClick={closeModalCart}
                                    >
                                        Ver carrito
                                    </Link>
                                    <Link
                                        href={'/checkout'}
                                        className='button-main basis-1/2 text-center uppercase'
                                        onClick={closeModalCart}
                                    >
                                        Finalizar compra
                                    </Link>
                                </div>
                                <div onClick={closeModalCart} className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block">Seguir comprando</div>
                            </div>
                            <div className={`tab-item note-block ${activeTab === 'note' ? 'active' : ''}`}>
                                <div className="px-6 py-4 border-b border-line">
                                    <div className="item flex items-center gap-3 cursor-pointer">
                                        <Icon.NotePencil className='text-xl' />
                                        <div className="caption1">Nota</div>
                                    </div>
                                </div>
                                <div className="form pt-4 px-6">
                                    <textarea name="form-note" id="form-note" rows={4} placeholder='Agrega instrucciones especiales para tu pedido...' className='caption1 py-3 px-4 bg-surface border-line rounded-md w-full'></textarea>
                                </div>
                                <div className="block-button text-center pt-4 px-6 pb-6">
                                    <div className='button-main w-full text-center' onClick={() => setActiveTab('')}>Guardar</div>
                                    <div onClick={() => setActiveTab('')} className="text-button-uppercase mt-4 text-center has-line-before cursor-pointer inline-block">Cancelar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCart
