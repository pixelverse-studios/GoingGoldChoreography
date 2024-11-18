'use client'
// import { useCallback } from 'react'
import Image from 'next/image'

import CallToAction from '@/components/callToAction'
import HeroLogo from '@/assets/gg-logo.jpg'
import styles from './Home.module.scss'

const HomePage = () => {
  // const onSubscribe = useCallback(async () => {
  //     try {
  //         // set loading
  //         console.log(window.ENV.API_HOST)
  //     } catch (error) {
  //         // handle error
  //     }
  // }, [])

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <h1>Custom Cheerleading Choreography</h1>
        <p>
          Innovative custom choreography to level up your competitive
          cheerleading routine. <em>GGC</em> works with all levels from Rec,
          School, Collegiate, and All-Star. Our commitment is not only supplying
          you with a custom routine to match your skillset, but to give you a
          GOLD level experience from start to finish.
        </p>
        <p className={styles.ctaLabel}>
          Stay up to date with everything going on!
        </p>
        <CallToAction buttonLabel="Sign Up" />
      </section>
      <img src={HeroLogo.src} alt="going-gold-logo" />
    </div>
  )
}

export default HomePage
