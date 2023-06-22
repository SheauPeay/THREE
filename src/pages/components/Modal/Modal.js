import styles from "./Modal.module.css"

const Modal = ({component}) => {
  return (
    <div className={styles.modalBack}>
      <div className={styles.modal}>
        {component}
      </div>
    </div>
  )
}

export default Modal