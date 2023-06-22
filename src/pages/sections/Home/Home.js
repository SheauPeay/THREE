import { header, slogan } from "@/materials/strings/Home"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <section className={styles.home} id='home'>
      <div className={styles.overlay}>
        <span className={styles.header}>{header}</span>
        <p className={styles.slogan}>{slogan}</p>
      </div>
    </section>
  )
}

export default Home