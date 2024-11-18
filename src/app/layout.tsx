import type { Metadata } from 'next'
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'

import Header from '@/components/header'
import Footer from '@/components/footer'

import '@mantine/core/styles.css'
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

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
