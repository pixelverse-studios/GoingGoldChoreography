'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Drawer, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import CallToAction from '../callToAction'
import useWindowWidth from '@/utls/hooks/useWindowWidth'
import styles from './Header.module.scss'

const ABOUT = {
  to: '/about',
  label: 'About'
}

const SERVICES = {
  to: '/services',
  label: 'Services'
}

const CONTACT = {
  to: '/contact',
  label: 'Contact'
}

const NavLinks = ({
  path,
  onClick
}: {
  path: string
  onClick: (to: string) => void
}) => (
  <ul>
    <li className={path === ABOUT.to ? styles.active : ''}>
      <span onClick={() => onClick(ABOUT.to)}>{ABOUT.label}</span>
    </li>
    <li className={path === SERVICES.to ? styles.active : ''}>
      <span onClick={() => onClick(SERVICES.to)}>{SERVICES.label}</span>
    </li>
    <li className={`callToAction ${path === CONTACT.to ? styles.active : ''}`}>
      <span onClick={() => onClick(CONTACT.to)}>{CONTACT.label}</span>
    </li>
  </ul>
)

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const windowWidth = useWindowWidth()

  const [isClient, setIsClient] = useState(false)

  const [opened, { open, close }] = useDisclosure(false)
  const [showModal, { open: openModal, close: closeModal }] =
    useDisclosure(false)

  useEffect(() => {
    if (!isClient) setIsClient(true)
  }, [isClient])

  const logoText = useMemo(
    () =>
      !isClient
        ? 'GGC'
        : windowWidth <= 1000
          ? 'GGC'
          : 'Going Gold Choreography',
    [windowWidth, isClient]
  )
  const showBurger = useMemo(
    () => (!isClient ? true : windowWidth < 750),
    [isClient, windowWidth]
  )

  const onRouteClick = useCallback(
    (to: string) => {
      if (opened) {
        close()
      }
      if (to === CONTACT.to) {
        openModal()
      } else {
        router.push(to)
      }
    },
    [close, openModal, opened, router]
  )

  return (
    <header className={styles.header}>
      <nav>
        <p className={styles.logo} onClick={() => onRouteClick('/')}>
          {logoText}
        </p>
        {showBurger ? (
          <>
            <Burger
              className={styles.bigmac}
              onClick={opened ? close : open}
              opened={opened}
            />
            <Drawer
              overlayProps={{ backgroundOpacity: 0, blur: 0 }}
              className={styles.mobileNavDrawer}
              size="100%"
              position="bottom"
              opened={opened}
              onClose={close}
              withCloseButton={false}>
              <NavLinks onClick={onRouteClick} path={pathname} />
            </Drawer>
          </>
        ) : (
          <NavLinks onClick={onRouteClick} path={pathname} />
        )}
      </nav>
      <CallToAction show={showModal} onClose={closeModal} />
    </header>
  )
}

export default Header
