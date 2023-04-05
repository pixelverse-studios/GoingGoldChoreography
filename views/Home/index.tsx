import { GiTrafficCone } from 'react-icons/gi'
import logo from '@/assets/gg logo.jpg'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <section className={styles.HomePage}>
            <div className={styles.imageOverlay}>
                <div className={styles.overlayText}>
                    <h1>Custom Cheerleading Choreography</h1>
                    <p>
                        Innovative custom choreography to level up your
                        competitive cheerleading routine. <em>GGC</em> works
                        with all levels from Rec, School, Collegiate, and
                        All-Star. Our commitment is not only supplying you with
                        a custom routine to match your skillset, but to give you
                        a GOLD level experience from start to finish.
                    </p>
                </div>
                <img src={logo.src} alt="logo" />
            </div>
            <div className={styles.tbdBanner}>
                <div>
                    <p>
                        <GiTrafficCone />
                        <em>UNDER CONSTRUCTION</em>
                    </p>
                    <p>Our new site is coming soon! Notify me!</p>
                </div>
            </div>
        </section>
    )
}

export default Home
