import Image from 'next/image'
import {
  FaRegCopyright,
  FaInstagram,
  FaRegEnvelope,
  FaPhone,
  FaFacebook
} from 'react-icons/fa6'

import CallToAction from '../callToAction'
import Logo from '@/assets/gg-logo.jpg'
import styles from './Footer.module.scss'

const Footer = () => {
  const copyright = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
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
            <a href="mailto:goinggoldchoreography@gmail.com" target="_blank">
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562112547148&mibextid=ZbWKwL"
              target="_blank">
              <FaFacebook />
            </a>
          </div>
          <CallToAction buttonLabel="Join the newsletter" />
        </div>
      </section>
      <section className={styles.copyright}>
        <FaRegCopyright />
        {copyright} Going Gold Choreography
      </section>
    </footer>
  )
}

export default Footer
