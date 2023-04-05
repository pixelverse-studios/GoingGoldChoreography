import { useRouter } from 'next/router'
import NavBar from '../nav'
import Footer from '../footer'
import styles from './Page.module.scss'

const Page = ({ children }: { children: any }) => {
    const { pathname: currentPage } = useRouter()
    const isHome = currentPage === '/'

    return (
        <main className={styles.PageContainer}>
            <NavBar />
            <section
                className={`${
                    isHome ? styles.HomeContainer : styles.ContentContainer
                }`}>
                {children}
            </section>
            <Footer />
        </main>
    )
}

export default Page
