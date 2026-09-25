import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Carrito de compras',
    description: 'Revisa los muebles ENSAMA en tu carrito antes de continuar al pago.',
}

export default function CarritoLayout({ children }: { children: React.ReactNode }) {
    return children
}
