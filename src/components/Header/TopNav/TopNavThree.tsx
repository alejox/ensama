import React from 'react'
import Link from 'next/link'

interface Props {
    props: string;
}

const TopNavThree: React.FC<Props> = ({ props }) => {
    return (
        <div className={`top-nav md:h-[44px] h-[30px] border-b border-line ${props}`}>
            <div className="container mx-auto h-full">
                <div className="top-nav-main flex justify-between items-center max-md:justify-center h-full">
                    <div className="left-content flex items-center">
                        <p className="caption2">Envíos a toda Colombia · fabricación propia</p>
                    </div>
                    <div className="right-content flex items-center gap-5 max-md:hidden">
                        <Link href={'/contacto'} className="caption2 hover:underline">
                            WhatsApp: [número por confirmar]
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavThree
