import React from 'react'
import type { Metadata } from 'next'
import InfoPageLayout from '@/components/Info/InfoPageLayout'

export const metadata: Metadata = {
    title: 'Envíos',
    description: 'Cobertura, tiempos y costos de envío de los muebles ENSAMA en Colombia.',
}

export default function Envios() {
    return (
        <InfoPageLayout heading='Envíos'>
            <div>
                <div className="heading5">Cobertura</div>
                <p className="text-secondary mt-3">
                    [Ciudades y departamentos de Colombia con cobertura de envío por confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Tiempos de entrega</div>
                <p className="text-secondary mt-3">
                    Los productos en stock y los fabricados sobre pedido muestran su tiempo de fabricación estimado en la
                    ficha de cada producto. [Tiempo de transporte adicional por ciudad pendiente de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Costo de envío</div>
                <p className="text-secondary mt-3">
                    El costo de envío se confirma en el checkout antes de pagar, según la dirección de entrega.
                    [Tabla de tarifas por zona pendiente de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Seguimiento del pedido</div>
                <p className="text-secondary mt-3">
                    [Procedimiento de seguimiento y transportadora utilizada pendiente de confirmar.]
                </p>
            </div>
        </InfoPageLayout>
    )
}
