'use client'
import React from 'react'
import Image from 'next/image'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { formatCOP } from '@/lib/format'

const Checkout = () => {
    const { cartState } = useCart();
    let totalCart = 0
    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
                <Breadcrumb heading='Finalizar compra' subHeading='Finalizar compra' />
            </div>
            <div className="cart-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex justify-between max-lg:flex-col gap-y-8">
                        <div className="left lg:w-1/2 w-full">
                            <div className="information mt-5">
                                <div className="heading5">Datos de contacto</div>
                                <div className="form-checkout mt-5">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="firstName" type="text" placeholder="Nombres *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="lastName" type="text" placeholder="Apellidos *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="email" type="email" placeholder="Correo electrónico *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="phoneNumber" type="tel" placeholder="Teléfono / WhatsApp *" required />
                                            </div>
                                            <div className="col-span-full select-block">
                                                <select className="border border-line px-4 py-3 w-full rounded-lg" id="department" name="department" defaultValue={'default'}>
                                                    <option value="default" disabled>Departamento</option>
                                                    <option value="Antioquia">Antioquia</option>
                                                    <option value="Bogotá D.C.">Bogotá D.C.</option>
                                                    <option value="Valle del Cauca">Valle del Cauca</option>
                                                    <option value="Cundinamarca">Cundinamarca</option>
                                                </select>
                                                <Icon.CaretDown className='arrow-down' />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="city" type="text" placeholder="Ciudad *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="address" type="text" placeholder="Dirección *" required />
                                            </div>
                                            <div className="">
                                                <input className="border-line px-4 py-3 w-full rounded-lg" id="postal" type="text" placeholder="Código postal" />
                                            </div>
                                            <div className="col-span-full">
                                                <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="note" name="note" placeholder="Indicaciones adicionales para la entrega..."></textarea>
                                            </div>
                                        </div>
                                        <div className="payment-block md:mt-10 mt-6">
                                            <div className="heading5">Pago</div>
                                            <div className="mt-4 py-4 px-5 bg-surface border border-line rounded-lg flex items-center gap-3">
                                                <Icon.Info size={22} className='text-secondary flex-shrink-0' />
                                                <div className="text-secondary caption1">Los pagos en línea aún no están habilitados. Muy pronto podrás pagar tu pedido directamente aquí.</div>
                                            </div>
                                        </div>
                                        <div className="block-button md:mt-10 mt-6">
                                            <button type="button" className="button-main w-full opacity-50 cursor-not-allowed" disabled>Pagar pedido</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="right lg:w-5/12 w-full">
                            <div className="checkout-block">
                                <div className="heading5 pb-3">Tu pedido</div>
                                <div className="list-product-checkout">
                                    {cartState.cartArray.length < 1 ? (
                                        <p className='text-button pt-3'>No hay productos en el carrito.</p>
                                    ) : (
                                        cartState.cartArray.map((product) => (
                                            <div className="item flex items-center justify-between w-full pb-5 border-b border-line gap-6 mt-5" key={product.id}>
                                                <div className="bg-img w-[100px] aspect-square flex-shrink-0 rounded-lg overflow-hidden">
                                                    <Image
                                                        src={product.thumbImage[0]}
                                                        width={500}
                                                        height={500}
                                                        alt={product.name}
                                                        className='w-full h-full'
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between w-full">
                                                    <div>
                                                        <div className="name text-title">{product.name}</div>
                                                        {product.selectedFinish && (
                                                            <div className="caption1 text-secondary mt-2 capitalize">{product.selectedFinish}</div>
                                                        )}
                                                    </div>
                                                    <div className="text-title">
                                                        <span className='quantity'>{product.quantity}</span>
                                                        <span className='px-1'>x</span>
                                                        <span>{formatCOP(product.price)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="ship-block py-5 flex justify-between border-b border-line">
                                    <div className="text-title">Envío</div>
                                    <div className="text-title text-secondary2">Se confirma antes de pagar</div>
                                </div>
                                <div className="total-cart-block pt-5 flex justify-between">
                                    <div className="heading5">Total</div>
                                    <div className="heading5 total-cart">{formatCOP(totalCart)}</div>
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

export default Checkout
