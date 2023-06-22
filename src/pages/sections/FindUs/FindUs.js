import ContactUs from "./ContactUs"
import styles from "./FindUs.module.css"
import Map from "./Map"
import VisitUs from "./VisitUs"

const FindUs = () => {
  return (
    <section className={styles.findUs} id="find">
      <VisitUs />
      <Map />
      <ContactUs />
    </section>
  )
}

export default FindUs