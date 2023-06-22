import { IoIosArrowUp } from "react-icons/io"
import styles from "./Scroller.module.css"

const Scroller = () => {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <button className={styles.btnScroller} onClick={scrollToTop}>
      <IoIosArrowUp className={styles.arrowUp} size={30}/>
    </button>
  )
}

export default Scroller