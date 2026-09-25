import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

/**
 * Shown on every info page (T6): content here is a structural placeholder
 * pending ENSAMA's real operational details, contact data and legal review.
 */
const PlaceholderNotice = () => {
    return (
        <div className="flex items-start gap-3 bg-ensama-50 border border-ensama-200 rounded-lg px-5 py-4">
            <Icon.Info size={20} className='text-ensama-600 flex-shrink-0 mt-0.5' />
            <div className="caption1 text-secondary">
                Contenido provisional: pendiente de revisión por ENSAMA. Los datos entre corchetes se completarán con la información real del negocio.
            </div>
        </div>
    )
}

export default PlaceholderNotice
