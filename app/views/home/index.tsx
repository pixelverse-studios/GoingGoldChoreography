import { useCallback } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, TextInput } from '@mantine/core'
import { FaAt, FaUser, FaUserTie } from 'react-icons/fa6'

import HeroLogo from '../../assets/gg-logo.jpg'
import styles from './Home.module.css'

const HomePage = () => {
    const [opened, { open, close }] = useDisclosure(false)

    const onSubscribe = useCallback(async () => {
        try {
            // set loading
            console.log(window.ENV.API_HOST)
        } catch (error) {
            // handle error
        }
    }, [])

    return (
        <div className={styles.homePage}>
            <section className={styles.hero}>
                <h1>Custom Cheerleading Choreography</h1>
                <p>
                    Innovative custom choreography to level up your competitive
                    cheerleading routine. <em>GGC</em> works with all levels
                    from Rec, School, Collegiate, and All-Star. Our commitment
                    is not only supplying you with a custom routine to match
                    your skillset, but to give you a GOLD level experience from
                    start to finish.
                </p>
                <p className={styles.ctaLabel}>
                    Stay up to date with everything going on!
                </p>
                <button onClick={open} className="callToAction">
                    Sign Up
                </button>
                <Modal
                    opened={opened}
                    onClose={close}
                    title="Mailing List"
                    className={styles.newsletterModal}>
                    <form>
                        <div className={styles.doubleFields}>
                            <TextInput
                                size="md"
                                leftSectionPointerEvents="none"
                                leftSection={<FaUser />}
                                variant="filled"
                                label="First Name"
                            />
                            <TextInput
                                size="md"
                                leftSectionPointerEvents="none"
                                leftSection={<FaUserTie />}
                                variant="filled"
                                label="Last Name"
                            />
                        </div>
                        <TextInput
                            size="md"
                            leftSectionPointerEvents="none"
                            leftSection={<FaAt />}
                            variant="filled"
                            label="Email"
                        />
                        <div className={styles.buttons}>
                            <button className="callToAction">Submit</button>
                            <button className={styles.cancel}>Cancel</button>
                        </div>
                    </form>
                </Modal>
            </section>
            <img src={HeroLogo} alt="going-gold-logo" />
        </div>
    )
}

export default HomePage
