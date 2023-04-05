import { FaPhoneSquare, FaEnvelope, FaInstagram } from 'react-icons/fa'

import logo from '@/assets/gg-logo.jpg'
import styles from './Footer.module.scss'

const Footer = () => {
    const today = new Date()
    const currentYear = today.getFullYear()
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterContainer}>
                <img src={logo.src} alt="logo" />
                {/* <img src={socialQr.src} alt="instagram-qr-code" /> */}
                <div>
                    <span className={styles.phone}>
                        <FaPhoneSquare /> 315-440-1386
                    </span>
                    <ul>
                        <a href="mailto:goinggoldchoreography@gmail.com">
                            <li>
                                <FaEnvelope />
                            </li>
                        </a>
                        <a
                            href="www.instagram.com/goinggoldchoreography"
                            target="_blank">
                            <li>
                                <FaInstagram />
                            </li>
                        </a>
                    </ul>
                    <span className={styles.copyright}>
                        Copyright &copy; {currentYear} Going Gold Choreography
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
