import { useState, useEffect } from 'react'

function useWindowWidth(): number {
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    )

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Call handler immediately to set initial window width
        handleResize()

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowWidth
}

export default useWindowWidth
