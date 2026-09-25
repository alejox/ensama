import React from 'react'
import type { Metadata } from 'next'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import InfoPageLayout from '@/components/Info/InfoPageLayout'

export const metadata: Metadata = {
    title: 'Contacto',
    description: 'Canales de contacto de ENSAMA para dudas sobre productos, envíos e instalación.',
}

const channels = [
    { icon: Icon.WhatsappLogo, label: 'WhatsApp', value: '[número por confirmar]' },
    { icon: Icon.EnvelopeSimple, label: 'Correo', value: '[correo por confirmar]' },
    { icon: Icon.MapPin, label: 'Dirección', value: '[dirección por confirmar]' },
    { icon: Icon.Clock, label: 'Horario de atención', value: '[horario por confirmar]' },
]

export default function Contacto() {
    return (
        <InfoPageLayout heading='Contacto'>
            <div>
                <div className="heading5">Escríbenos</div>
                <p className="text-secondary mt-3">
                    Mientras habilitamos un formulario de contacto en línea, puedes escribirnos directamente por estos canales:
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {channels.map((channel) => (
                    <div key={channel.label} className="flex items-center gap-4 border border-line rounded-lg px-5 py-4">
                        <channel.icon size={22} className='text-ensama-600 flex-shrink-0' />
                        <div>
                            <div className="text-title">{channel.label}</div>
                            <div className="text-secondary caption1">{channel.value}</div>
                        </div>
                    </div>
                ))}
            </div>
        </InfoPageLayout>
    )
}
