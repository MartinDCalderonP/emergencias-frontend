import React from "react"
import styles from "./styles.module.css"

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader} data-testid="loader" />
    </div>
  )
}

export default Loader
