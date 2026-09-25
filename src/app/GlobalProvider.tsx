import React from 'react'
import { CartProvider } from '@/context/CartContext'
import { ModalCartProvider } from '@/context/ModalCartContext'
import { ModalSearchProvider } from '@/context/ModalSearchContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            <ModalCartProvider>
                <ModalSearchProvider>
                    {children}
                </ModalSearchProvider>
            </ModalCartProvider>
        </CartProvider>
    )
}

export default GlobalProvider
