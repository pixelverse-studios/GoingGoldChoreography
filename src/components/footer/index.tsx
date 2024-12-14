import Image from 'next/image'
import {
  FaInstagram,
  FaRegEnvelope,
  FaPhone,
  FaFacebook
} from 'react-icons/fa6'

import Newsletter from '../newsletter'
import Logo from '../../assets/gg-logo.jpg'
import styles from './Footer.module.scss'

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <section className={styles.footerWrapper}>
        <section className={styles.content}>
          <Image src={Logo} alt="logo" />
          <div className={styles.contact}>
            <div className={styles.socials}>
              <a href="tel:315-440-1386">
                <FaPhone />
              </a>
              <a href="www.instagram.com/goinggoldchoreography" target="_blank">
                <FaRegEnvelope />
              </a>
              <a
                href="mailto:goinggoldchoreography@gmail.com"
                target="_blank"
                rel="noreferrer">
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562112547148&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer">
                <FaFacebook />
              </a>
            </div>
            <Newsletter buttonLabel="Join the newsletter" />
          </div>
        </section>
        <section className={styles.copyright}>
          &copy;
          {copyright} Going Gold Choreography
        </section>
      </section>
    </footer>
  )
}

export default Footer
