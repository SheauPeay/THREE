import styles from "./MobileNav.module.css"
import {ImCross} from "react-icons/im";
// props = {close: function}

const MobileNav = ({close}) => {

  const smoothScroll = (toGo) => {
    close()
    if(toGo === 'home') {
      window.scrollTo({top: 0, behavior: 'smooth'})
      return
    }

    document.getElementById(toGo).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.mobileNav}>
      <span className={styles.close}><ImCross onClick={close}/></span>
      <nav className={styles.nav}>
        <a onClick={() => smoothScroll("home")}>Home</a>
        <a onClick={() => smoothScroll("about")} >About THREE.</a>
        <a onClick={() => smoothScroll("menu")}>Our Menu</a>
        <a onClick={() => smoothScroll("find")}>Find Us</a>
        <a style={{borderBottom: "none"}} onClick={() => smoothScroll("faq")}>FAQ</a>
      </nav>
    </div>
  )
}

export default MobileNav