import { useMemo } from 'react'
import { Link, useLocation } from '@remix-run/react'
import styles from './Header.module.css'

const ABOUT = {
    to: '/about',
    label: 'About'
}

const SERVICES = {
    to: '/services',
    label: 'Services'
}

const CONTACT = {
    to: '/contact',
    label: 'Contact'
}

const Header = () => {
    const { pathname } = useLocation()

    return (
        <header className={styles.header}>
            <Link to="/">
                <span className="logo">Going Gold Choreography</span>
            </Link>
            <ul>
                <li className={pathname === ABOUT.to ? styles.active : ''}>
                    <Link to={ABOUT.to}>{ABOUT.label}</Link>
                </li>
                <li className={pathname === SERVICES.to ? styles.active : ''}>
                    <Link to={SERVICES.to}>{SERVICES.label}</Link>
                </li>
                <li
                    className={`callToAction ${
                        pathname === CONTACT.to ? styles.active : ''
                    }`}>
                    <Link to={CONTACT.to}>{CONTACT.label}</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
