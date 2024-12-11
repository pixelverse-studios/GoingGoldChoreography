'use client'

import { useCallback, useState, FormEvent } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal, TextInput, LoadingOverlay } from '@mantine/core'
import { hasLength, isEmail, useForm } from '@mantine/form'
import { FaAt, FaUser, FaUserTie } from 'react-icons/fa6'
import { notifications } from '@mantine/notifications'

import { handleResponseStatus } from '@/utls/http'
import styles from './CallToAction.module.scss'

const CallToAction = ({ buttonLabel }: { buttonLabel: string }) => {
  const [opened, { open, close }] = useDisclosure(false)
  const [loading, setLoading] = useState<boolean>(false)

  const form = useForm({
    mode: 'controlled',
    initialValues: { firstName: '', lastName: '', email: '' },
    validateInputOnChange: true,
    validate: {
      firstName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
      lastName: hasLength({ min: 2 }, 'Must be at least 2 characters'),
      email: isEmail('Invalid email')
    }
  })

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setLoading(true)

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST}/newsletter/${process.env.NEXT_PUBLIC_SLUG}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.getValues())
          }
        )
        return handleResponseStatus(res, notifications, 'Subscribed')
      } catch (error) {
        console.warn(error)
        notifications.show({
          color: 'red',
          title: 'Error',
          message: 'There was an issue trying to subscribe to the newsletter'
        })
      } finally {
        setLoading(false)
        form.reset()
        close()
      }
    },
    [close, form]
  )

  return (
    <>
      <button onClick={open} className="callToAction">
        {buttonLabel}
      </button>
      <Modal
        centered
        opened={opened}
        onClose={close}
        title="Join the newsletter"
        className={styles.ctaModal}>
        <form onSubmit={onSubmit}>
          <LoadingOverlay
            visible={loading}
            loaderProps={{ children: 'Loading...' }}
          />
          <div className={styles.doubleFields}>
            <TextInput
              label="First Name"
              leftSection={<FaUser />}
              leftSectionPointerEvents="none"
              size="md"
              variant="filled"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              label="Last Name"
              leftSection={<FaUserTie />}
              leftSectionPointerEvents="none"
              size="md"
              variant="filled"
              {...form.getInputProps('lastName')}
            />
          </div>
          <TextInput
            label="Email"
            leftSection={<FaAt />}
            leftSectionPointerEvents="none"
            size="md"
            variant="filled"
            {...form.getInputProps('email')}
          />
          <div className={styles.buttons}>
            <button className="callToAction" disabled={!form.isValid()}>
              Submit
            </button>
            <button className={styles.cancel} onClick={close}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default CallToAction
