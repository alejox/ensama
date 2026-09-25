'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { formatCOP } from '@/lib/format'

const Cart = () => {
    const router = useRouter()
    const { cartState, updateCart, removeFromCart } = useCart();

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        const itemToUpdate = cartState.cartArray.find((item) => item.id === productId);
        if (itemToUpdate) {
            updateCart(productId, newQuantity, itemToUpdate.selectedFinish);
        }
    };

    let totalCart = 0
    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    const redirectToCheckout = () => {
        router.push(`/checkout`)
    }

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
                <Breadcrumb heading='Carrito de compras' subHeading='Carrito de compras' />
            </div>
            <div className="cart-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex justify-between max-xl:flex-col gap-y-8">
                        <div className="xl:w-2/3 xl:pr-3 w-full">
                            <div className="list-product w-full">
                                <div className='w-full'>
                                    <div className="heading bg-surface bora-4 pt-4 pb-4">
                                        <div className="flex">
                                            <div className="w-1/2">
                                                <div className="text-button text-center">Producto</div>
                                            </div>
                                            <div className="w-1/12">
                                                <div className="text-button text-center">Precio</div>
                                            </div>
                                            <div className="w-1/6">
                                                <div className="text-button text-center">Cantidad</div>
                                            </div>
                                            <div className="w-1/6">
                                                <div className="text-button text-center">Total</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-product-main w-full mt-3">
                                        {cartState.cartArray.length < 1 ? (
                                            <p className='text-button pt-3'>Tu carrito está vacío.</p>
                                        ) : (
                                            cartState.cartArray.map((product) => (
                                                <div className="item flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-line w-full" key={product.id}>
                                                    <div className="w-1/2">
                                                        <div className="flex items-center gap-6">
                                                            <div className="bg-img md:w-[100px] w-20 aspect-[3/4]">
                                                                <Image
                                                                    src={product.thumbImage[0]}
                                                                    width={1000}
                                                                    height={1000}
                                                                    alt={product.name}
                                                                    className='w-full h-full object-cover rounded-lg'
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="text-title">{product.name}</div>
                                                                {product.selectedFinish && (
                                                                    <div className="text-secondary2 caption1 mt-1 capitalize">{product.selectedFinish}</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/12 price flex items-center justify-center">
                                                        <div className="text-title text-center">{formatCOP(product.price)}</div>
                                                    </div>
                                                    <div className="w-1/6 flex items-center justify-center">
                                                        <div className="quantity-block bg-surface md:p-3 p-2 flex items-center justify-between rounded-lg border border-line md:w-[100px] flex-shrink-0 w-20">
                                                            <Icon.Minus
                                                                onClick={() => {
                                                                    if (product.quantity > 1) {
                                                                        handleQuantityChange(product.id, product.quantity - 1)
                                                                    }
                                                                }}
                                                                className={`text-base max-md:text-sm ${product.quantity === 1 ? 'disabled' : ''}`}
                                                            />
                                                            <div className="text-button quantity">{product.quantity}</div>
                                                            <Icon.Plus
                                                                onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                                                                className='text-base max-md:text-sm'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="w-1/6 flex total-price items-center justify-center">
                                                        <div className="text-title text-center">{formatCOP(product.quantity * product.price)}</div>
                                                    </div>
                                                    <div className="w-1/12 flex items-center justify-center">
                                                        <Icon.XCircle
                                                            className='text-xl max-md:text-base text-red cursor-pointer hover:text-black duration-500'
                                                            onClick={() => {
                                                                removeFromCart(product.id)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/3 xl:pl-12 w-full">
                            <div className="checkout-block bg-surface p-6 rounded-2xl">
                                <div className="heading5">Resumen del pedido</div>
                                <div className="total-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Subtotal</div>
                                    <div className="text-title">{formatCOP(totalCart)}</div>
                                </div>
                                <div className="ship-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Envío</div>
                                    <div className="text-title text-secondary2">Se confirma en el checkout</div>
                                </div>
                                <div className="total-cart-block pt-4 pb-4 flex justify-between">
                                    <div className="heading5">Total</div>
                                    <div className="heading5">{formatCOP(totalCart)}</div>
                                </div>
                                <div className="block-button flex flex-col items-center gap-y-4 mt-5">
                                    <div className="checkout-btn button-main text-center w-full" onClick={redirectToCheckout}>Ir a pagar</div>
                                    <Link className="text-button hover-underline" href={"/productos"}>Seguir comprando</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
