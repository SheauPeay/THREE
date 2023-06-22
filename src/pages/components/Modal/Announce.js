import { announcements, announceOpen, announceClose, openingDays } from "@/materials/strings/Announcement"
import { AiOutlineCloseCircle } from "react-icons/ai"
import styles from "./Announce.module.css"

const Announce = ({close}) => {
  const today = new Date()

  const isEqualDate = (date1, date2) => {
      return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDay() === date2.getDay()
  }

  const getAnnouncement = (today, announcements) => {
      // first return exception announcements
      for (const announcement of announcements) {
          if (isEqualDate(today, announcement.date)) {
              return announcement
          }
      }
      // next return default open announcement
      for (const day of openingDays) {
          if (day === today.getDay()) {
              return announceOpen
          }
      }
      // else return close announcement
      return announceClose
  }

  const announce = getAnnouncement(today, announcements)
  const announceHeader = announce.header
  const announceText = announce.content

  return (
    <div className={styles.announce}>
      <span className={styles.close}><AiOutlineCloseCircle onClick={close} size={30} style={{color: "white"}}/></span>
      <span className={styles.header}>{announceHeader}</span>
      <p className={styles.announceText}>{announceText}</p>
    </div>
  )
}

export default Announce