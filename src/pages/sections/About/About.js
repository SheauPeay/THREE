import { description, header, slogan } from "@/materials/strings/About"
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.about} id='about'>
      <span className={styles.header}>{header}</span>
      <p className={styles.slogan}>{slogan}</p>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

export default About