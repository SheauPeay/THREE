import { questions } from "@/materials/strings/FAQ"
import Question from "./Question"
import styles from "./FAQ.module.css"

const FAQ = () => {
  return (
    <section className={styles.faq} id="faq">
      <span className={styles.header}>FAQs</span>
      <div className={styles.questions}>
        {questions.map((v,i) => 
          <Question question={v.question} answer={v.answer} />
        )}
      </div>
      <span className={styles.note}>Still can't find what you're looking for? Drop us a call and we'll answer your questions!</span>
    </section>
  )
}

export default FAQ