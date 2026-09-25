import React from 'react'
import Link from 'next/link'

/**
 * ENSAMA wordmark. No logo file was provided yet, so the brand shows as a
 * styled text mark using the `ensama` color tokens (tailwind.config.ts).
 * Swap this component for an <Image> once a real logo file is available.
 */
interface Props {
    className?: string
}

const Logo: React.FC<Props> = ({ className = '' }) => {
    return (
        <Link href={'/'} className={`logo inline-flex items-baseline ${className}`}>
            <span className="font-semibold tracking-wide text-ensama-900">ENSAMA</span>
        </Link>
    )
}

export default Logo
