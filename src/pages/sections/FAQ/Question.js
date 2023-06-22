import styles from "./Question.module.css"
import {useState} from "react";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

const Question = ({question, answer}) => {
  const [open, isOpen] = useState(false)

  const handleClick = () => {
      isOpen(prevState => !prevState)
  }
  //original write pattern
  // const handleClick = () => {
  //     isOpen((prevState) => {
  //         return !prevState
  //     })
  // }

  return (
    <div className={styles.questions}>
      <span className={styles.question} onClick={handleClick}>
        {question} 
        {open && <IoIosArrowUp />}
        {!open && <IoIosArrowDown />}
      </span>
      {open && <div className={styles.answer}>{answer}</div>}
    </div>
  )
}

export default Question