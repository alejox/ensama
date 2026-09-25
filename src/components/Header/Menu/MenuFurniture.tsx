'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useCart } from '@/context/CartContext';
import { getCategories } from '@/lib/catalog'
import Logo from '@/components/Logo/Logo'

const categories = getCategories()

interface Props {
    props: string
}

const MenuFurniture: React.FC<Props> = ({ props }) => {
    const pathname = usePathname()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalSearch } = useModalSearchContext()

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const navLinks = [
        { href: '/', label: 'Inicio' },
        { href: '/productos', label: 'Productos' },
        ...categories.map((category) => ({ href: `/categorias/${category.slug}`, label: category.name })),
        { href: '/nosotros', label: 'Nosotros' },
        { href: '/contacto', label: 'Contacto' },
    ]

    const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

    return (
        <>
            <div className={`header-menu style-one ${fixedHeader ? ' fixed' : 'relative'} w-full md:h-[74px] h-[56px] ${props}`}>
                <div className="container mx-auto h-full">
                    <div className="header-main flex items-center justify-between h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <Logo className="lg:hidden" />
                        <div className="menu-main h-full max-lg:hidden flex items-center">
                            <Logo className="pr-10" />
                            <ul className='flex items-center gap-7 h-full'>
                                {navLinks.map((link) => (
                                    <li key={link.href} className='h-full'>
                                        <Link
                                            href={link.href}
                                            className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${isActive(link.href) ? 'active' : ''}`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="right flex items-center gap-5 relative z-[1]">
                            <div
                                className="search-icon flex items-center justify-center cursor-pointer"
                                onClick={openModalSearch}
                            >
                                <Icon.MagnifyingGlass size={22} color='black' />
                            </div>
                            <div className="cart-icon flex items-center relative cursor-pointer" onClick={openModalCart}>
                                <Icon.Handbag size={24} color='black' />
                                <span className="quantity cart-quantity absolute -right-1.5 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">{cartState.cartArray.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
                <div className="menu-container bg-white h-full">
                    <div className="container h-full">
                        <div className="menu-main h-full overflow-hidden">
                            <div className="heading py-2 relative flex items-center justify-center">
                                <div
                                    className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                                    onClick={handleMenuMobile}
                                >
                                    <Icon.X size={14} />
                                </div>
                                <Logo />
                            </div>
                            <div
                                className="form-search relative mt-2 cursor-pointer"
                                onClick={() => {
                                    handleMenuMobile()
                                    openModalSearch()
                                }}
                            >
                                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2' />
                                <div className='h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4 flex items-center text-secondary'>Buscar productos…</div>
                            </div>
                            <div className="list-nav mt-6">
                                <ul>
                                    {navLinks.map((link) => (
                                        <li key={link.href} onClick={handleMenuMobile}>
                                            <Link
                                                href={link.href}
                                                className={`text-xl font-semibold flex items-center justify-between py-2 ${isActive(link.href) ? 'active' : ''}`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuFurniture
