import React from 'react'
import type { Metadata } from 'next'
import InfoPageLayout from '@/components/Info/InfoPageLayout'

export const metadata: Metadata = {
    title: 'Política de privacidad',
    description: 'Tratamiento de datos personales de ENSAMA conforme a la Ley 1581 de 2012 (Colombia).',
}

export default function Privacidad() {
    return (
        <InfoPageLayout heading='Privacidad'>
            <div>
                <div className="heading5">Tratamiento de datos personales — Ley 1581 de 2012</div>
                <p className="text-secondary mt-3">
                    Esta sección se redactará conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013 de Colombia sobre
                    protección de datos personales. El siguiente esqueleto indica el contenido que falta por completar;
                    no constituye un texto legal definitivo.
                </p>
            </div>
            <div>
                <div className="heading5">Responsable del tratamiento</div>
                <p className="text-secondary mt-3">
                    [Razón social, NIT y datos de contacto del responsable del tratamiento pendientes de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Datos que recolectamos</div>
                <p className="text-secondary mt-3">
                    [Detalle de los datos recolectados en el checkout —contacto, dirección de envío— pendiente de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Finalidad del tratamiento</div>
                <p className="text-secondary mt-3">
                    [Finalidades —procesar pedidos, coordinar el envío, atención al cliente— pendientes de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Derechos del titular</div>
                <p className="text-secondary mt-3">
                    [Procedimiento para conocer, actualizar, rectificar o suprimir datos personales, conforme al artículo 8
                    de la Ley 1581 de 2012, pendiente de confirmar.]
                </p>
            </div>
            <div>
                <div className="heading5">Contacto para asuntos de privacidad</div>
                <p className="text-secondary mt-3">
                    [Canal de contacto dedicado para solicitudes de datos personales pendiente de confirmar.]
                </p>
            </div>
        </InfoPageLayout>
    )
}
