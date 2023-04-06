import { useState, useEffect, useCallback } from 'react'
import { useMutation } from '@apollo/client'
import { Alert, Input, Modal } from 'antd'
import { FaUserCircle, FaEnvelope } from 'react-icons/fa'

import { ADD_NEWSLETTER_PARTICIPANT } from '@/lib/gql/mutations/newsletter'
import logo from '@/assets/gg-logo.jpg'
import styles from './Home.module.scss'

const Home = () => {
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)

    const toggleOff = useCallback(() => {
        setName('')
        setEmail('')
        setShowSuccess(false)
        setShowError(false)
        setVisible(false)
    }, [])

    useEffect(() => {
        if (showSuccess) {
            setTimeout(() => toggleOff(), 8000)
        }
        if (showError) {
            setTimeout(() => toggleOff(), 8000)
        }
    }, [showSuccess, showError])

    const [addNewsletterParticipant] = useMutation(ADD_NEWSLETTER_PARTICIPANT, {
        onCompleted(data) {
            setShowSuccess(true)
        },
        onError(err) {
            setShowError(true)
            // display error banner
        }
    })

    const onSubmit = () =>
        addNewsletterParticipant({ variables: { email, name } })

    const validEmail =
        /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/.test(
            email
        )
    const validName = !!name

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
            <div className={styles.newsletterBanner}>
                <div>
                    <p>
                        Get alerted from me about updates, new offerings, and
                        other things!
                    </p>
                    <button onClick={() => setVisible(true)}>
                        Sign up now
                    </button>
                    <Modal
                        footer={[
                            <button
                                disabled={!validEmail || !validName}
                                className={styles.modalSubmit}
                                onClick={onSubmit}>
                                Submit
                            </button>,
                            <button
                                onClick={toggleOff}
                                className={styles.modalCancel}>
                                Cancel
                            </button>
                        ]}
                        title="Sign up for my newsletter!"
                        open={visible}
                        onCancel={() => setVisible(false)}>
                        <div className={styles.newsletterForm}>
                            <Input
                                size="large"
                                placeholder="Name"
                                value={name}
                                onChange={(e: any) => setName(e.target.value)}
                                prefix={<FaUserCircle />}
                            />
                            <Input
                                size="large"
                                placeholder="Email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)}
                                prefix={<FaEnvelope />}
                            />
                            {showSuccess ? (
                                <Alert
                                    type="success"
                                    message="You have been successfully added to the newsletter!"
                                />
                            ) : null}
                            {showError ? (
                                <Alert
                                    type="error"
                                    message="There was an issue adding you to the newsletter. Please try again or reach out to me at goinggoldchoreography@gmail.com"
                                />
                            ) : null}
                        </div>
                    </Modal>
                </div>
            </div>
        </section>
    )
}

export default Home
