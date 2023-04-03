import NavBar from '../nav'
import styles from './Page.module.scss'

const Page = ({ children }: { children: any }) => {
    return (
        <main className={styles.PageContainer}>
            <NavBar />
            <section className={styles.ContentContainer}>{children}</section>
        </main>
    )
}

export default Page
