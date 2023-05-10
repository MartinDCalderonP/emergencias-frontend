import Image from "next/image"
import styles from "./styles.module.css"
import Modal, { ModalProps } from "@/components/Modal"
import { PictureData } from "@/common/interfaces"

interface DayModalProps extends ModalProps {
  dayData: PictureData
}

const DayModal = ({ toggleModal, dayData }: DayModalProps) => {
  return (
    <Modal toggleModal={toggleModal}>
      {dayData && (
        <div className={styles.container}>
          <h2>{dayData.title}</h2>
          <p>{dayData.date}</p>
          {dayData.media_type === "image" && (
            <Image
              src={dayData.hdurl}
              alt={dayData.title}
              width={500}
              height={500}
              priority
            />
          )}
          <p>{dayData.copyright}</p>
          <p>{dayData.explanation}</p>
        </div>
      )}
    </Modal>
  )
}

export default DayModal
