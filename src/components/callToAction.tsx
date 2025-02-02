'use client'

import { Modal } from '@mantine/core'

import { InlineWidget } from 'react-calendly'

const CallToAction = ({
  show,
  onClose
}: {
  show: boolean
  onClose: () => void
}) => (
  <Modal
    centered
    overlayProps={{
      backgroundOpacity: 0.55,
      blur: 3
    }}
    opened={show}
    onClose={onClose}
    title="Sign Up for a meeting">
    <InlineWidget url="https://calendly.com/goinggoldchoreography" />
  </Modal>
)

export default CallToAction
