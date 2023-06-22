import { callLabel, callNumber, contactHeader, emailLabel, emailAddress, followUs, instagram } from "@/materials/strings/FindUs"
import styles from "./ContactUs.module.css"
import {IoCallOutline} from "react-icons/io5";
import {TfiEmail} from "react-icons/tfi";
import {AiOutlineLike, AiOutlineInstagram} from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <span className={styles.header}>{contactHeader}</span>
      <div className={styles.section}>
        <IoCallOutline size={30}/>
        <p>{callLabel}</p>
        <a href={"tel:"+callNumber}>{callNumber}</a>
      </div>
      <div className={styles.section}>
        <TfiEmail size={30}/>
        <p>{emailLabel}</p>
        <a href={"mailto:"+emailAddress}>{emailAddress}</a>
      </div>
      <div className={styles.section}>
        <AiOutlineLike size={30}/>
        <p>{followUs}</p>
        <a href={instagram} target="_blank">
          <AiOutlineInstagram size={30} />
        </a>
      </div>
    </div>
  )
}

export default ContactUs