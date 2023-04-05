import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import ContactWidget from '../contactWidget'
import styles from './Nav.module.scss'

const MobileNav = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const { pathname: currentPage } = router

    const toggleMenu = (status: boolean) => setOpen(status)
    const onRouteClick = (route: string) => {
        if (route === 'contact') {
            setOpen(false)
            setModalVisible(true)
            // handle contact widget, close drawer
        } else {
            setOpen(false)
            router.push(route)
        }
    }

    return (
        <nav className={styles.MobileNav}>
            <div className={styles.navLogo}>
                <Link href="/">Going Gold Choreography</Link>
            </div>
            <div
                className={`${styles.hamburger} ${
                    open ? styles.open : styles.closed
                }`}
                onClick={() => toggleMenu(!open)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`${open ? styles.show : styles.hide}`}>
                <li
                    className={
                        currentPage === '/about'
                            ? styles.active
                            : styles.inactive
                    }
                    onClick={() => onRouteClick('/about')}>
                    ABOUT
                </li>
                <li
                    className={
                        currentPage === '/services'
                            ? styles.active
                            : styles.inactive
                    }
                    onClick={() => onRouteClick('/services')}>
                    SERVICES
                </li>
                <li onClick={() => onRouteClick('contact')}>CONTACT</li>
            </ul>
            <ContactWidget
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </nav>
    )
}

export default MobileNav
