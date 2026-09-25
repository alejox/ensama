const copFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
})

/**
 * Formats an integer COP amount as a localized currency string, e.g. "$189.000".
 */
export function formatCOP(amount: number): string {
    return copFormatter.format(amount)
}
