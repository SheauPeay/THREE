import Image from "next/image"
import styles from "./NavBar.module.css"
import logo from "./three.png"
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Modal from "../Modal/Modal";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleClick = () => {
    setIsMenuOpen(true)
  }
  const closeModal = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navBar").style.top = "0";
        } else if (prevScrollpos <= currentScrollPos - 10) {
            document.getElementById("navBar").style.top = "-150px";
        }
        prevScrollpos = currentScrollPos;
    }
  }, [])

  const smoothScroll = (toGo) => {
    if(toGo === 'home') {
      window.scrollTo({top: 0, behavior: 'smooth'})
      return
    }

    document.getElementById(toGo).scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.navBar} id="navBar">
      <Image className={styles.logo} src={logo} alt={logo}/>
      <AiOutlineMenu size={30} onClick={handleClick} className={styles.mobileMenu}/>

      {isMenuOpen && <Modal component={<MobileNav close={closeModal}/>}/>}
      {/* {isMenuOpen && <MobileNav close={closeModal}/>} */}

      <nav className={styles.nav}>
        <a onClick={() => smoothScroll("home")}>Home</a>
        <a onClick={() => smoothScroll("about")} >About THREE.</a>
        <a onClick={() => smoothScroll("menu")}>Our Menu</a>
        <a onClick={() => smoothScroll("find")}>Find Us</a>
        <a onClick={() => smoothScroll("faq")}>FAQ</a>
      </nav>
    </div>
  )
}

export default NavBar