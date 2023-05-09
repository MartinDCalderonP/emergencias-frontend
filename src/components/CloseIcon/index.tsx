import styles from "./styles.module.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

interface CloseIconProps {
  onClick: () => void
}

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return <AiOutlineCloseCircle className={styles.closeIcon} onClick={onClick} />
}

export default CloseIcon
