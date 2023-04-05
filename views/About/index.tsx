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
                <div className={styles.imgContainer}>
                    <img src={aboutMe.src} alt="aboutMeImage" />
                </div>
            </div>
            <div className={styles.accolades}>
                <p>
                    Going Gold Choreography was designed to provide custom
                    routine choreography to fit your team’s abilities as well as
                    meticulously maxing out your score sheet potential.
                </p>
            </div>
            <div className={styles.aboutMe}>
                <div className={styles.imgContainer}>
                    <img src={meetMe.src} alt="meetMe" />
                </div>
                <div className={styles.overlayText}>
                    <h3>More About Me</h3>
                    <p>
                        With 10+ years in the industry, GGC comes with the
                        expertise and takes pride in supplying clients with
                        innovative tools to take your team to the next level.
                        From routine inception to the finishing touches, the
                        goal is always for a “golden” outcome!
                    </p>
                    <h4>Accolades</h4>
                    <p>
                        Choreography Accolades include Pop Warner National
                        Championships, State Qualifier and State Championships,
                        Summit Wild-Card Bid Winner, Top 10 Summit Finishes,
                        All-Star Regional and National Championships and Top
                        Score, NCA Collegiate Top 5 Finishes.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
