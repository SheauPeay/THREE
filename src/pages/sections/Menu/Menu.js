import { btnMenu, description, food, header } from "@/materials/strings/Menu"
import Dessert from "./Dessert"
import styles from "./Menu.module.css"
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <section className={styles.menu} id='menu'>
      <span className={styles.header}>{header}</span>
      <p className={styles.description}>{description}</p>
      <div className={styles.dishes}>
        {food.map(value => 
          <MenuItem key={value} name={value.name} img={value.img}/>
        )}
      </div>
      <Dessert />
      <div className={styles.download}>
        <a className={styles.btnMenu} href="https://drive.google.com/file/d/1SyKMm96wBYxUkY-XDA8vjAQSJ-5414Dd/view?usp=share_link" download="Three by Garamika" target="_blank" >
          Click for Menu
        </a>
      </div>
    </section>
  )
}

export default Menu