import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.name}>THREE. by Garamika</p>
      <p className={styles.copyright}>@2022 by Three by Garamika Pte. Ltd.</p>
    </div>
  )
}

export default Footer