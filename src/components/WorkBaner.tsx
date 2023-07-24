import React from 'react'
import styles from "../styles/index1.module.css"
import vector14 from "../public/vector14.svg"
import icon3 from "../public/icon3.svg"

const WorkBaner = () => {
  return (
    <div className={styles.work3}>
            <img className={styles.icon16} alt="" src={icon3} />
      <div className={styles.content29}>
        <div className={styles.title8}>
          <div className={styles.needASuccessful1}>
            Need a full-stack developer ?
          </div>
          <b className={styles.letsWorkTogether1}>Lets Work Together</b>
        </div>
        <div className={styles.button9}>
        <a style={{width:"100%",maxWidth:"315px",textDecoration:"none",color:"black"}} href="mailto:nta1998@gmail.com">
            <div className={styles.getStarted15}>
              <div className={styles.getStarted2}>
                <b className={styles.newsletter}>send email</b>
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src={vector14}
                />
              </div>
          </div>
              <div className={styles.baackground11}/>
        </a>
        </div>
      </div>
    </div>)
}

export default WorkBaner