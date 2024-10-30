import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData
} from '@remix-run/react'
import type { LinksFunction, LoaderFunction } from '@remix-run/node'
import { SnackbarProvider } from 'notistack'
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'
import {
    FaCheckDouble,
    FaTriangleExclamation,
    FaCircleInfo,
    FaBug
} from 'react-icons/fa6'

import Header from './components/header'
import Footer from './components/footer'

import './tailwind.css'
import '@mantine/core/styles.css'
import './styles/app.css'

export const loader: LoaderFunction = async () => {
    return {
        ENV: {
            API_HOST: process.env.API_HOST,
            SLUG: process.env.SLUG
        }
    }
}

export const links: LinksFunction = () => [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous'
    },
    {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
    }
]

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

export default function App() {
    const data = useLoaderData<typeof loader>()
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
                <ColorSchemeScript />
            </head>
            <body>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.ENV = ${JSON.stringify(data.ENV)};`
                    }}
                />
                <MantineProvider theme={theme} defaultColorScheme="dark">
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </MantineProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}
