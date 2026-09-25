import React from 'react'
import type { Metadata } from 'next'
import InfoPageLayout from '@/components/Info/InfoPageLayout'

export const metadata: Metadata = {
    title: 'Nosotros',
    description: 'Conoce a ENSAMA: muebles de fabricación propia, fáciles de enviar e instalar en Colombia.',
}

export default function Nosotros() {
    return (
        <InfoPageLayout heading='Nosotros'>
            <div>
                <div className="heading5">Quiénes somos</div>
                <p className="text-secondary mt-3">
                    ENSAMA es una marca de muebles de fabricación propia para baño, repisas, espejos y organización.
                    Diseñamos piezas pensadas para llegar desarmadas en caja y armarse fácilmente en casa, sin necesidad
                    de un técnico. [Descripción completa de la marca pendiente de confirmación por ENSAMA.]
                </p>
            </div>
            <div>
                <div className="heading5">Nuestra fabricación</div>
                <p className="text-secondary mt-3">
                    [Detalle del taller, ubicación de fabricación y materiales por confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Cobertura</div>
                <p className="text-secondary mt-3">
                    [Ciudades y departamentos de Colombia con cobertura de envío por confirmar.]
                </p>
            </div>
        </InfoPageLayout>
    )
}
