import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { PopupButton } from 'react-calendly'

import ContactWidget from '../contactWidget'
import styles from './Nav.module.scss'

const DesktopNavItems = () => {
    const router = useRouter()
    const { pathname: currentPage } = router
    const [modalVisible, setModalVisible] = useState(false)

    const setModalOpen = () => setModalVisible(true)

    return (
        <nav className={styles.Nav}>
            <div className={styles.navContent}>
                <div className={styles.navLogo}>
                    <Link href="/">Going Gold Choreography</Link>
                </div>
                <ul className={styles.navItems}>
                    <li
                        className={
                            currentPage === '/about'
                                ? styles.active
                                : styles.inactive
                        }>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li
                        className={
                            currentPage === '/services'
                                ? styles.active
                                : styles.inactive
                        }>
                        <Link href="/services">SERVICES</Link>
                    </li>
                    <li>
                        <button onClick={setModalOpen}>CONTACT</button>
                    </li>
                </ul>
            </div>
            <ContactWidget
                visible={modalVisible}
                setVisible={setModalVisible}
            />
        </nav>
    )
}

export default DesktopNavItems
