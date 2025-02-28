import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@mantine/core/styles.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '@/styles/app.scss'

export const metadata: Metadata = {
  title: 'Going Gold Choreography',
  description: ''
}

const theme = createTheme({
  fontFamily: 'IBM Plex Sans',
  colors: {
    gold: [
      '#faf3e0',
      '#f5e7c2',
      '#f0dba4',
      '#ebcf86',
      '#e7c368',
      '#e3c970',
      '#d3b45a',
      '#b29448',
      '#8c7237',
      '#574320'
    ]
  },
  primaryColor: 'gold',
  radius: {
    custom: '8px'
  },
  defaultRadius: 'custom'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Header />
          {children}
          <Footer />
          <Notifications autoClose={5000} position="top-right" />
        </MantineProvider>
      </body>
    </html>
  )
}
