'use client'
import { FaStarHalfAlt } from 'react-icons/fa'

import Portrait from '@/assets/portrait.png'
import Blob from '@/assets/Blob.png'
import classes from './About.module.css'

const AboutPage = () => {
  return (
    <main className={classes.AboutPage}>
      <section className={`page`}>
        <section className={classes.description}>
          <img src={Portrait.src} alt="portrait of allie" />
          <article>
            <h2>Meet Alli</h2>
            <p>
              Alli has Pop Warner, High School, All-Star, and Collegiate
              cheerleading experience as an athlete, coach, choreographer, and
              judge. Always engaged and enthralled in current trends in the
              industry and has extensive knowledge of a variety of rules
              including Varsity/United Scoring, USA Cheer Regulations, Pop
              Warner, AYC, YCADA. Experience with NCA, UCA, Jamz, NAIA,
              NYSPHSAA, NJCDCA, AACCA. Judges certification across all levels
            </p>
            <p>
              With 10+ years in the industry, GGC comes with the expertise and
              takes pride in supplying clients with innovative tools to take
              your team to the next level. From routine inception to the
              finishing touches, the goal is always for a &apos;golden&apos;
              outcome!
            </p>
            <p>
              Going Gold Choreography was designed to provide custom routine
              choreography to fit your team&apos;s abilities as well as
              meticulously maxing out your score sheet potential.
            </p>
          </article>
        </section>
        <section className={classes.accomplishments}>
          <h3>Accomplishments</h3>
          <ul>
            <li>
              <FaStarHalfAlt />
              <p>Pop Warner National Championships</p>
            </li>
            <li>
              <FaStarHalfAlt />
              <p>State Qualifier and State Championships</p>
            </li>
            <li>
              <FaStarHalfAlt />
              <p>Summit Wild-Card Bid Winner</p>
            </li>
          </ul>
          <ul>
            <li>
              <FaStarHalfAlt />
              <p>Top 10 Summit Finishes</p>
            </li>
            <li>
              <FaStarHalfAlt />
              <p>All-Star Regional and National Championships and Top Score</p>
            </li>
            <li>
              <FaStarHalfAlt />
              <p>NCA Collegiate Top 5 Finishes</p>
            </li>
          </ul>
        </section>
        <img className={classes.topBlob} src={Blob.src} alt="blob" />
        <img className={classes.bottomBlob} src={Blob.src} alt="blob" />
      </section>
    </main>
  )
}

export default AboutPage
