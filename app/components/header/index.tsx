import { useMemo, useCallback } from 'react'
import { useNavigate, useLocation } from '@remix-run/react'
import { Drawer, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import useWindowWidth from '~/utls/hooks/useWindowWidth'
import styles from './Header.module.css'

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
        <li
            className={`callToAction ${
                path === CONTACT.to ? styles.active : ''
            }`}>
            <span onClick={() => onClick(CONTACT.to)}>{CONTACT.label}</span>
        </li>
    </ul>
)

const Header = () => {
    const { pathname } = useLocation()
    const windowWidth = useWindowWidth()
    const navigate = useNavigate()
    const [opened, { open, close }] = useDisclosure(false)

    const logoText = useMemo(
        () => (windowWidth <= 1000 ? 'GGC' : 'Going Gold Choreography'),
        [windowWidth]
    )
    const showBurger = useMemo(() => windowWidth < 750, [windowWidth])

    const onRouteClick = useCallback(
        (to: string) => {
            if (opened) {
                close()
            }
            navigate(to)
        },
        [opened]
    )

    return (
        <header className={styles.header}>
            <span className={styles.logo} onClick={() => onRouteClick('/')}>
                {logoText}
            </span>
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
        </header>
    )
}

export default Header
