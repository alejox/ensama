import React from 'react'
import type { Metadata } from 'next'
import InfoPageLayout from '@/components/Info/InfoPageLayout'

export const metadata: Metadata = {
    title: 'Cambios y devoluciones',
    description: 'Procedimiento de ENSAMA para cambios, devoluciones y productos con daños de envío.',
}

export default function CambiosYDevoluciones() {
    return (
        <InfoPageLayout heading='Cambios y devoluciones'>
            <div>
                <div className="heading5">Plazo para solicitar un cambio o devolución</div>
                <p className="text-secondary mt-3">
                    [Número de días hábiles desde la entrega pendiente de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Condiciones del producto</div>
                <p className="text-secondary mt-3">
                    [Requisitos de empaque, uso e instalación previa para aceptar un cambio o devolución pendientes de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Producto dañado en el envío</div>
                <p className="text-secondary mt-3">
                    Si tu mueble llega dañado, comunícate por WhatsApp o correo (ver <a href="/contacto" className="text-black hover:underline">Contacto</a>)
                    con fotos del daño y el número de pedido. [Procedimiento completo de reposición pendiente de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Costos y reembolsos</div>
                <p className="text-secondary mt-3">
                    [Quién asume el costo del transporte de devolución y el medio/plazo de reembolso pendientes de confirmar.]
                </p>
            </div>
        </InfoPageLayout>
    )
}
