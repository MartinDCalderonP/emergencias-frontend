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
        <>
          <h2>{dayData.title}</h2>
          <p>{dayData.explanation}</p>
        </>
      )}
    </Modal>
  )
}

export default DayModal
