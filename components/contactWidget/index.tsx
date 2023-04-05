import { InlineWidget, useCalendlyEventListener } from 'react-calendly'
import { Modal } from 'antd'
import styles from './ContactWidget.module.scss'

interface ContactWidgetProps {
    visible: boolean
    setVisible: Function
}

const ContactWidget = ({ visible, setVisible }: ContactWidgetProps) => {
    const closeModal = () => setVisible(false)

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
