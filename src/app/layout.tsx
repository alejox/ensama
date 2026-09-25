import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import '@/styles/styles.scss'
import GlobalProvider from './GlobalProvider'
import ModalCart from '@/components/Modal/ModalCart'
import ModalSearch from '@/components/Modal/ModalSearch'

const instrument = Instrument_Sans({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ENSAMA — Muebles fáciles de enviar e instalar',
    template: '%s | ENSAMA',
  },
  description: 'Muebles de fabricación propia para baño, repisas, espejos y organización, pensados para llegar a cualquier parte de Colombia y armarse en casa sin complicaciones.',
  openGraph: {
    title: 'ENSAMA — Muebles fáciles de enviar e instalar',
    description: 'Muebles de fabricación propia para baño, repisas, espejos y organización, pensados para llegar a cualquier parte de Colombia y armarse en casa sin complicaciones.',
    locale: 'es_CO',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <GlobalProvider>
      <html lang="es">
        <body className={instrument.className}>
          {children}
          <ModalCart />
          <ModalSearch />
        </body>
      </html>
    </GlobalProvider>
  )
}
