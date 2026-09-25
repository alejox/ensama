import React from 'react'
import Link from 'next/link'
import { getCategories } from '@/lib/catalog'
import Logo from '@/components/Logo/Logo'

const categories = getCategories()

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div id="footer" className='footer'>
            <div className="footer-main bg-surface">
                <div className="container">
                    <div className="content-footer py-[60px] flex justify-between flex-wrap gap-y-8">
                        <div className="company-infor basis-1/4 max-lg:basis-full pr-7">
                            <Logo />
                            <div className='flex gap-3 mt-3'>
                                <div className="flex flex-col ">
                                    <span className="text-button">Correo:</span>
                                    <span className="text-button mt-3">WhatsApp:</span>
                                    <span className="text-button mt-3">NIT:</span>
                                </div>
                                <div className="flex flex-col ">
                                    <span className=''>[correo por confirmar]</span>
                                    <span className='mt-3'>[número por confirmar]</span>
                                    <span className='mt-3 pt-px'>[NIT por confirmar]</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-content flex flex-wrap gap-y-8 basis-3/4 max-lg:basis-full">
                            <div className="list-nav flex justify-between basis-2/3 max-md:basis-full gap-4">
                                <div className="item flex flex-col basis-1/3 ">
                                    <div className="text-button-uppercase pb-3">Categorías</div>
                                    {categories.map((category) => (
                                        <Link
                                            key={category.slug}
                                            className='caption1 has-line-before duration-300 w-fit pt-2 first:pt-0'
                                            href={`/categorias/${category.slug}`}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="item flex flex-col basis-1/3 ">
                                    <div className="text-button-uppercase pb-3">ENSAMA</div>
                                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/nosotros'}>Nosotros</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/contacto'}>Contacto</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/preguntas-frecuentes'}>Preguntas frecuentes</Link>
                                </div>
                                <div className="item flex flex-col basis-1/3 ">
                                    <div className="text-button-uppercase pb-3">Ayuda</div>
                                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/envios'}>Envíos</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/cambios-y-devoluciones'}>Cambios y devoluciones</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/privacidad'}>Privacidad</Link>
                                </div>
                            </div>
                            <div className="about basis-1/3 pl-7 max-md:basis-full max-md:pl-0">
                                <div className="text-button-uppercase">Fabricación propia</div>
                                <div className="caption1 mt-3 text-secondary">
                                    Diseñamos y fabricamos nuestros muebles pensando en que sean fáciles de enviar y de instalar en cualquier ciudad de Colombia.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
                        <div className="copyright caption1 text-secondary">© {year} ENSAMA. Todos los derechos reservados.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
