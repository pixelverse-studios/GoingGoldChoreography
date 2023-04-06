import { useState } from 'react'
import { Carousel } from 'antd'
import { FaCheckCircle, FaStarHalfAlt } from 'react-icons/fa'

import ContactWidget from '@/components/contactWidget'
import { serviceOfferings } from './static-data'
import team1 from '@/assets/Team1.jpg'
import team2 from '@/assets/Team2.jpg'
import team3 from '@/assets/Team3.jpg'
import team4 from '@/assets/Team4.jpg'
import team5 from '@/assets/Team5.jpg'
import styles from './Services.module.scss'

const Services = () => {
    const [showContact, setShowContact] = useState(false)
    const setModalOpen = () => setShowContact(true)

    return (
        <section className={styles.ServicesPage}>
            <div className={styles.pageHeader}>
                <div className={styles.gallery}>
                    <Carousel autoplay>
                        <img src={team1.src} alt="team1" />
                        <img src={team2.src} alt="team2" />
                        <img src={team3.src} alt="team3" />
                        <img src={team4.src} alt="team4" />
                        <img src={team5.src} alt="team5" />
                    </Carousel>
                </div>
                <div className={styles.pageDescription}>
                    <h1>Innovative Choreography specializing in</h1>
                    <ul>
                        <li>
                            <FaStarHalfAlt />
                            Pop Warner/Rec
                        </li>
                        <li>
                            <FaStarHalfAlt />
                            High School
                        </li>
                        <li>
                            <FaStarHalfAlt />
                            Collegiate
                        </li>
                        <li>
                            <FaStarHalfAlt />
                            All-Star Prep/Novice
                        </li>
                        <li>
                            <FaStarHalfAlt />
                            All-Star Elite
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.offerings}>
                {serviceOfferings.map((offering: any, index: number) => {
                    return (
                        <div className={styles.offering} key={index}>
                            <span key={offering.title}>{offering.title}</span>
                            <p key={offering.description}>
                                {offering.description}
                            </p>
                            <ul key={`ul-${index}`}>
                                {offering.items.map((item: string) => (
                                    <li key={item}>
                                        <FaCheckCircle />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button onClick={setModalOpen}>Sign up now</button>
                        </div>
                    )
                })}
            </div>
            <ContactWidget visible={showContact} setVisible={setShowContact} />
        </section>
    )
}

export default Services
