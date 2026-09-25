import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import heroImage from '@/assets/hero.png'

/**
 * ENSAMA hero. The banner artwork already contains the logo, headline, copy and
 * CTA, so the headline lives in a visually hidden h1 and the whole banner links
 * to the catalog. Below lg the image is cropped from the left to keep the text
 * side readable.
 */
const Hero = () => {
    return (
        <section className="hero-block relative w-full overflow-hidden bg-ensama-50">
            <h1 className="sr-only">Espacios que encajan contigo</h1>
            <Link href="/productos" className="block" aria-label="Ver catálogo de muebles ENSAMA">
                <Image
                    src={heroImage}
                    alt="ENSAMA, muebles que encajan. Muebles modernos y funcionales, diseñados para hacer de tu hogar un lugar único. Envíos a todo el país, fácil de instalar, materiales de alta calidad y diseño funcional."
                    priority={true}
                    placeholder="blur"
                    sizes="100vw"
                    className="w-full h-[380px] lg:h-auto object-cover object-left"
                />
            </Link>
        </section>
    )
}

export default Hero
