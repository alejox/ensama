import React from 'react'
import TopNavThree from '@/components/Header/TopNav/TopNavThree'
import MenuFurniture from '@/components/Header/Menu/MenuFurniture'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import PlaceholderNotice from './PlaceholderNotice'

interface Props {
    heading: string
    children: React.ReactNode
}

/**
 * Shared shell for the T6 information pages (/nosotros, /contacto, /envios,
 * /cambios-y-devoluciones, /privacidad, /preguntas-frecuentes): same
 * breadcrumb, placeholder notice and footer as the rest of the storefront.
 */
const InfoPageLayout: React.FC<Props> = ({ heading, children }) => {
    return (
        <>
            <TopNavThree props="style-three bg-white" />
            <div id="header" className='relative w-full'>
                <MenuFurniture props="bg-white" />
                <Breadcrumb heading={heading} subHeading={heading} />
            </div>
            <div className="info-page-block md:py-20 py-10">
                <div className="container">
                    <div className="max-w-3xl mx-auto flex flex-col gap-6">
                        <PlaceholderNotice />
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default InfoPageLayout
