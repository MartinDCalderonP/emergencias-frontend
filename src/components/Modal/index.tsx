import { createPortal } from "react-dom"
import { useRef } from "react"
import useOnClickOutside from "@/hooks/useOnClickOutside"
import styles from "./styles.module.css"
import CloseIcon from "../CloseIcon"

interface ModalProps {
  toggleModal: () => void
}

const Modal = ({ toggleModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(modalRef, toggleModal)

  return createPortal(
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${styles.appearModal}`} ref={modalRef}>
        <CloseIcon onClick={toggleModal} />
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  )
}

export default Modal
