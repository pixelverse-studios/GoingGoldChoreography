import NavBar from '../nav'
import Footer from '../footer'
import styles from './Page.module.scss'

const Page = ({ children }: { children: any }) => {
    return (
        <main className={styles.PageContainer}>
            <NavBar />
            <section className={styles.ContentContainer}>{children}</section>
            <Footer />
        </main>
    )
}

export default Page
