import type { MetaFunction } from '@remix-run/node'
import HomePage from '~/views/home'

export const meta: MetaFunction = () => {
    return [
        { title: 'Going Gold Choreography' },
        { name: 'description', content: 'Welcome to GGC!' }
    ]
}

declare global {
    interface Window {
        ENV: {
            API_HOST: string
            SLUG: string
        }
    }
}

export default function Index() {
    return <HomePage />
}
