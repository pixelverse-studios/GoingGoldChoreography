import aboutMe from '@/assets/aboutme.jpg'
import meetMe from '@/assets/Meetyourchoreographer.jpg'
import styles from './About.module.scss'

const About = () => {
    return (
        <section className={styles.AboutPage}>
            <div className={styles.meetMe}>
                <div className={styles.overlayText}>
                    <h3>Meet Your Choreographer</h3>
                    <p>
                        Alli has Pop Warner, High School, All-Star, and
                        Collegiate cheerleading experience as an athlete, coach,
                        choreographer, and judge. Always engaged and enthralled
                        in current trends in the industry and has extensive
                        knowledge of a variety of rules including Varsity/United
                        Scoring, USA Cheer Regulations, Pop Warner, AYC, YCADA.
                        Experience with NCA, UCA, Jamz, NAIA, NYSPHSAA, NJCDCA,
                        AACCA. Judges certification across all levels.
                    </p>
                </div>
                <img src={meetMe.src} alt="meetMeImage" />
            </div>
            <div className={styles.aboutMe}>
                <img src={aboutMe.src} alt="aboutMeImage" />
                <p></p>
            </div>
        </section>
    )
}

export default About
