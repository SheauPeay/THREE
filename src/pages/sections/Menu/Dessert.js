import { dessertDesc, dessertText, dessertHeader, dessertLeft, dessertRight } from "@/materials/strings/Menu"
import Image from "next/image"
import styles from "./Menu.module.css"

const Dessert = () => {
  return (
    <div className={styles.dessert}>
      <div className={styles.dessertImgWrapper}>
        <Image className={styles.dessertLeft} src={dessertLeft} alt={dessertLeft} />
      </div>
      <div className={styles.dessertCenter}>
        <span className={styles.dessertHeader}>{dessertHeader}</span>
        <p className={styles.dessertDesc}>{dessertDesc}</p>
        <p className={styles.dessertText}>{dessertText}</p>
      </div>
      <div className={styles.dessertImgWrapper}>
        <Image className={styles.dessertRight} src={dessertRight} alt={dessertRight} />
      </div>
    </div>
  )
}

export default Dessert