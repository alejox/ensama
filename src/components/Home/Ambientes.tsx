import React from 'react'
import Image from 'next/image'

/**
 * Placeholder "ambientes" gallery: real ENSAMA installation photos are
 * pending, so this uses generic template imagery clearly captioned as such.
 */
const ambientes = [
    { image: '/images/slider/bg-furniture1.png', caption: 'Baño — imagen de referencia (pendiente foto real de ENSAMA)' },
    { image: '/images/slider/bg-furniture2.png', caption: 'Sala / repisas — imagen de referencia (pendiente foto real de ENSAMA)' },
    { image: '/images/slider/bg-furniture3.png', caption: 'Entrada / organización — imagen de referencia (pendiente foto real de ENSAMA)' },
]

const Ambientes = () => {
    return (
        <div className="ambientes-block md:pt-20 pt-10">
            <div className="container">
                <div className="heading flex flex-col items-center text-center">
                    <div className="heading3">Ambientes</div>
                    <div className="caption1 text-secondary mt-2">Imágenes de referencia — las fotos reales de ENSAMA se agregarán próximamente.</div>
                </div>
                <div className="list-ambientes grid md:grid-cols-3 grid-cols-1 gap-[20px] md:mt-10 mt-6">
                    {ambientes.map((item) => (
                        <div key={item.image} className="ambiente-item rounded-2xl overflow-hidden">
                            <div className="w-full aspect-[4/3] bg-ensama-50">
                                <Image
                                    src={item.image}
                                    width={800}
                                    height={600}
                                    alt={item.caption}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className="caption2 text-secondary mt-2">{item.caption}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ambientes
