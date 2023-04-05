import Link from 'next/link'

import useBreakpoint, {
    MOBILE_BREAKPOINT
} from '@/utilities/hooks/useBreakpoint'
import FullSizeNav from './FullSizeNav'
import MobileNav from './MobileNav'
import styles from './Nav.module.scss'

const NavBar = () => {
    const breakpoint = useBreakpoint()

    if (breakpoint === MOBILE_BREAKPOINT) {
        return <MobileNav />
    }

    return <FullSizeNav />
}

export default NavBar
