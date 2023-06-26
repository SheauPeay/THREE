import { note, questions } from "@/materials/strings/FAQ"
import Question from "./Question"
import styles from "./FAQ.module.css"

const FAQ = () => {
  return (
    <section className={styles.faq} id="faq">
      <span className={styles.header}>FAQs</span>
      <div className={styles.questions}>
        {questions.map((v,i) => 
          <Question key={i} question={v.question} answer={v.answer} />
        )}
      </div>
      <span className={styles.note}>{note}</span>
    </section>
  )
}

export default FAQ