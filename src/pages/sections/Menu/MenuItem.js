import Image from "next/image"
import styles from "./MenuItem.module.css"


const MenuItem = ({name, img}) => {
  return (
    <div className={styles.dish}>
      <Image className={styles.menuImage} src={img} alt={img}/>
      <p className={styles.dishName}>{name}</p>
    </div>
  )
}

export default MenuItem