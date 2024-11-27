import { FaCheckCircle, FaStarHalfAlt } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'

import team1 from '@/assets/Team1.jpg'
import team2 from '@/assets/Team2.jpg'
import team3 from '@/assets/Team3.jpg'
import team4 from '@/assets/Team4.jpg'
import team5 from '@/assets/Team5.jpg'
import styles from './Services.module.scss'

const SignUpButton = () => {
  return <button className="callToAction">Sign Up Now</button>
}

const Hero = () => (
  <section className={styles.serviceHero}>
    <div className={styles.categories}>
      <h1>Innovative Choreography specializing in</h1>
      <ul>
        <li>
          <FaStarHalfAlt />
          <span>Pop Warner/Rec</span>
        </li>
        <li>
          <FaStarHalfAlt />
          <span>High School</span>
        </li>
        <li>
          <FaStarHalfAlt />
          <span>Collegiate</span>
        </li>
        <li>
          <FaStarHalfAlt />
          <span>All-Star Prep/Novice</span>
        </li>
        <li>
          <FaStarHalfAlt />
          <span>All-Star Elite</span>
        </li>
      </ul>
    </div>
    <Carousel
      showArrows
      showStatus={false}
      showIndicators={false}
      infiniteLoop
      showThumbs={false}
      autoPlay
      dynamicHeight={false}
      stopOnHover
      swipeable>
      <img src={team1.src} alt="team1" />
      <img src={team2.src} alt="team2" />
      <img src={team3.src} alt="team3" />
      <img src={team4.src} alt="team4" />
      <img src={team5.src} alt="team5" />
    </Carousel>
  </section>
)

const Offerings = () => (
  <ul className={styles.offerings}>
    <li>
      <h3>Full Routine Choreography</h3>
      <div className={styles.descriptor}>
        <p>Full routine custom choreography from inception to instruction</p>
        <ul>
          <li>
            <FaCheckCircle />
            <span>Consultation</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Routine mapping</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>1 year of virtual support throughout competition season</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Score sheet breakdown</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Completed 8 count sheets</span>
          </li>
        </ul>
      </div>
      <SignUpButton />
    </li>
    <li>
      <h3>Routine Section Choreography</h3>
      <div className={styles.descriptor}>
        <p>Custom choreography by section of routine</p>
        <ul>
          <li>
            <FaCheckCircle />
            <span>Building (Stunts)</span>
            <FaCheckCircle />
            <span>Standing Tumbling</span>
            <FaCheckCircle />
            <span>Cheer</span>
            <FaCheckCircle />
            <span>Pyramid</span>
            <FaCheckCircle />
            <span>Running Tumbling</span>
            <FaCheckCircle />
            <span>Dance</span>
          </li>
        </ul>
      </div>
      <SignUpButton />
    </li>
    <li>
      <h3>Building Bundle</h3>
      <div className={styles.descriptor}>
        <p>
          Stunt and Pyramid building choreography. This package includes a
          Consultation and custom choreography in all building sections
          including
        </p>
        <ul>
          <li>
            <FaCheckCircle />
            <span>Transitions</span>
            <FaCheckCircle />
            <span>Choreography associated with the building sections</span>
            <FaCheckCircle />
            <span>Skills</span>
          </li>
        </ul>
      </div>
      <SignUpButton />
    </li>
    <li>
      <h3>Clean Up Camp</h3>
      <div className={styles.descriptor}>
        <p>
          Need a clean-up of your finished routine? This package is designed as
          a consulting session to
        </p>
        <ul>
          <li>
            <FaCheckCircle />
            <span>Add upgrades</span>
          </li>
          <li>
            <FaCheckCircle />
            <span>
              Provide overall suggestions to “clean up” and improve overall
              effect of choreographed routine
            </span>
          </li>
          <li>
            <FaCheckCircle />
            <span>Add flare to transitional elements and sections</span>
          </li>
        </ul>
      </div>
      <SignUpButton />
    </li>
  </ul>
)

const ServicesPage = () => {
  return (
    <main className={styles.servicesPage}>
      <section className={`${styles.content} page`}>
        <Hero />
        <Offerings />
      </section>
    </main>
  )
}

export default ServicesPage
