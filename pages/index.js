import CustomHead from '../components/CustomHead'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead
        title='Muhammad Rizki Purba | Web developer'
        description="Portfolio website of Muhammad Rizki Purba"
      >
        <link rel="canonical" href="https://rizkipurba.id/" />
        <meta property="og:url" content="https://rizkipurba.id/" />
      </CustomHead>

      <main className={styles.main}>
        <h1>Welcome to my website</h1>
      </main>
    </div>
  )
}
