import React from 'react'
import styles from "../styles/index1.module.css"
import star6 from "../public/star-6.svg"
import star7 from "../public/star-7.svg"
import heart1 from "../public/heart1.svg"
import vector15 from "../public/vector15.svg"


const Baner = () => {
  return (
    <div className={styles.scrollingText}>
      <div className={styles.content30}>
        <div className={styles.start}>
          <div className={styles.startChild} />
          <div className={styles.startItem} />
        </div>
        <b className={styles.wereAFullService1}>
        Two minds only one person</b>
        <div className={styles.agency}>
          <img className={styles.agencyChild} alt="" src={star6} />
          <img className={styles.agencyItem} alt="" src={star7} />
          <b className={styles.agency1}>Agency</b>
        </div>
        <img className={styles.heartIcon1} alt="" src={heart1} />
        <img className={styles.vectorIcon40} alt="" src={vector15} />
      </div>
    </div>
  )
}

export default Baner