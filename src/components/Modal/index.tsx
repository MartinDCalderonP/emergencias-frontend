import { createPortal } from "react-dom"
import { ReactNode, useRef } from "react"
import useOnClickOutside from "@/hooks/useOnClickOutside"
import styles from "./styles.module.css"
import CloseIcon from "../CloseIcon"

export interface ModalProps {
  children: ReactNode
  toggleModal: () => void
}

const Modal = ({ children, toggleModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(modalRef, toggleModal)

  return createPortal(
    <div className={styles.overlay}>
      <div className={`${styles.modal} ${styles.appearModal}`} ref={modalRef}>
        <CloseIcon onClick={toggleModal} />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  )
}

export default Modal
