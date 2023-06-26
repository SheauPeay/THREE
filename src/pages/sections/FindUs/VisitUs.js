import { address, chopeLink, days, msg, operate, transport, visitHeader } from "@/materials/strings/FindUs"
import styles from "./VisitUs.module.css"
import {CiLocationOn} from "react-icons/ci";

const VisitUs = () => {
  return (
    <div className={styles.visit}>
      <span className={styles.header}>{visitHeader}</span>
      <CiLocationOn size={30} />
      <span>Address</span>
      <span className={styles.address}>{address}</span>
      {transport.map((v, i) => 
        <span key={i} className={styles.transport}>{v.label}: {v.value}</span>
      )}
      {days.map((v, i) =>
        <span key={i} className={styles.days}>{v.weekday}  {v.onOff}</span>
      )}
      <div className={styles.operateTitle}>Operationg Hours</div>
      {operate.map((v, i) =>
        <span key={i}>({v.meal})  {v.time}</span>
      )}
      <p>{msg}</p>
      <a className={styles.btnReserve} href={chopeLink} target="_blank">Reserve Now</a>
    </div>
  )
}

export default VisitUs