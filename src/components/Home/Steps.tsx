import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const steps = [
    {
        icon: Icon.ShoppingCartSimple,
        title: '1. Compra',
        description: 'Elige tu mueble, el acabado y agrégalo al carrito. El envío se confirma antes de pagar.',
    },
    {
        icon: Icon.Package,
        title: '2. Recibe',
        description: 'Tu pedido llega desarmado en caja, listo para transportarse a cualquier parte de Colombia.',
    },
    {
        icon: Icon.Wrench,
        title: '3. Instala',
        description: 'Arma el mueble en casa con el kit de anclaje y el manual incluido, sin necesidad de un técnico.',
    },
]

const Steps = () => {
    return (
        <div className="steps-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading flex flex-col items-center text-center">
                    <div className="heading3">Compra → recibe → instala</div>
                </div>
                <div className="list-steps grid md:grid-cols-3 grid-cols-1 gap-[30px] md:mt-10 mt-6">
                    {steps.map((step) => (
                        <div key={step.title} className="step-item flex flex-col items-center text-center bg-ensama-50 rounded-2xl p-8">
                            <step.icon size={48} className='text-ensama-600' />
                            <div className="heading6 mt-4">{step.title}</div>
                            <div className="caption1 text-secondary mt-2">{step.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Steps
