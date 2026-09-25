import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const benefits = [
    { icon: Icon.Truck, label: 'Envíos a Colombia' },
    { icon: Icon.Wrench, label: 'Fácil instalación' },
    { icon: Icon.Factory, label: 'Fabricación propia' },
    { icon: Icon.WhatsappLogo, label: 'Atención por WhatsApp' },
]

const BenefitsStrip = () => {
    return (
        <div className="benefits-strip md:pt-20 pt-10">
            <div className="container">
                <div className="list-benefit grid items-start lg:grid-cols-4 grid-cols-2 gap-[30px]">
                    {benefits.map((benefit) => (
                        <div key={benefit.label} className="benefit-item flex flex-col items-center justify-center">
                            <benefit.icon className='lg:text-7xl text-5xl text-ensama-600' />
                            <div className="heading6 text-center mt-5">{benefit.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BenefitsStrip
