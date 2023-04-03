import Link from 'next/link'
import styles from './Nav.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.Nav}>
            <div className={styles.navContent}>
                <div className={styles.navLogo}>
                    <Link href="/">Going Gold Choreography</Link>
                </div>
                <ul className={styles.navItems}>
                    <li>
                        <Link href="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="/services">SERVICES</Link>
                    </li>
                    <li>
                        <button>CONTACT</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
