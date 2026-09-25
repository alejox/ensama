import React from 'react'
import type { Metadata } from 'next'
import InfoPageLayout from '@/components/Info/InfoPageLayout'
import Faq from '@/components/Info/Faq'

export const metadata: Metadata = {
    title: 'Preguntas frecuentes',
    description: 'Respuestas a las preguntas más comunes sobre envío, instalación, medidas, pagos y cambios en ENSAMA.',
}

const faqItems = [
    {
        question: '¿A qué ciudades de Colombia hacen envíos?',
        answer: '[Cobertura de envío por confirmar.] El costo y tiempo estimado de envío se confirman en el checkout antes de pagar.',
    },
    {
        question: '¿Los muebles llegan armados o hay que instalarlos?',
        answer: 'Los muebles ENSAMA llegan desarmados en caja, con kit de anclaje, tornillería y manual de instalación incluidos, para armarlos en casa sin necesidad de un técnico.',
    },
    {
        question: '¿Dónde encuentro las medidas exactas de cada mueble?',
        answer: 'Cada ficha de producto muestra el ancho, alto y profundidad en centímetros, el material, los acabados disponibles y el contenido de la caja.',
    },
    {
        question: '¿Cómo puedo pagar mi pedido?',
        answer: 'El pago en línea con Wompi está pendiente de habilitar. Por ahora el checkout registra tus datos de contacto y envío, y el pago no se procesa todavía.',
    },
    {
        question: '¿Puedo cambiar o devolver un producto?',
        answer: 'Sí. Revisa las condiciones y plazos en la página de Cambios y devoluciones.',
    },
]

export default function PreguntasFrecuentes() {
    return (
        <InfoPageLayout heading='Preguntas frecuentes'>
            <Faq items={faqItems} />
        </InfoPageLayout>
    )
}
