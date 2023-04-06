import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import { Modal } from 'antd'
import { useMutation } from '@apollo/client'

import { ADD_CALENDLY_PARTICIPANT } from '@/lib/gql/mutations/newsletter'
import styles from './ContactWidget.module.scss'

interface ContactWidgetProps {
    visible: boolean
    setVisible: Function
}

const ContactWidget = ({ visible, setVisible }: ContactWidgetProps) => {
    const closeModal = () => setVisible(false)

    const [addCalendlyParticipant] = useMutation(ADD_CALENDLY_PARTICIPANT, {
        onCompleted(data) {
            console.log(data)
            // handle success
        },
        onError(err) {
            console.log(err)
            // display error banner
        }
    })

    const onEventScheduled = (e: any) => {
        addCalendlyParticipant({
            variables: {
                inviteeUri: e.data.payload.invitee.uri
            }
        })
    }

    useCalendlyEventListener({
        onEventScheduled
    })

    return (
        <div className={styles.ContactWidget}>
            <Modal
                footer={null}
                width="75%"
                title="Sign up for a meeting!"
                open={visible}
                onCancel={closeModal}>
                <InlineWidget url="https://calendly.com/goinggoldchoreography" />
            </Modal>
        </div>
    )
}

export default ContactWidget
