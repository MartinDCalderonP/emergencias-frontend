import Image from "next/image"
import styles from "./styles.module.css"
import Modal, { ModalProps } from "@/components/Modal"

interface DayData {
  copyright: string
  date: string
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

interface DayModalProps extends ModalProps {
  dayData: DayData
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
              blurDataURL={dayData.url}
              alt={dayData.title}
              width={500}
              height={500}
              priority={true}
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
