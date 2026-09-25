import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Finalizar compra',
    description: 'Datos de contacto, envío y pago para tu pedido ENSAMA. Los pagos en línea aún no están habilitados.',
}

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return children
}
