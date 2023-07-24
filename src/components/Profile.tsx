import React from 'react'
import styles from "../styles/index1.module.css"
import patterns from "../public/patterns.svg"
import vector12 from "../public/vector12.svg"
import banner from "../public/banner-image@2x.png"



const Profile = () => {
  const handleClickScroll = (e:string) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className={styles.banner}>
      <img className={styles.patternsIcon} alt="" src={patterns} />
      <div className={styles.banner1}>
        <div className={styles.content28}>
          <div className={styles.subContent6}>
            <div className={styles.title7}>
              <b className={styles.technologyDesignContainer}>
                <p className={styles.completelyCustom}>full-stack</p>
                <p className={styles.completelyCustom}>developer</p>
              </b>
              <div className={styles.studio}>
                <b className={styles.newsletter}>python</b>
              </div>
            </div>
            <div
              className={styles.loremIpsumIs6}
            >There is nothing that cannot be learned
          </div>
          <div className={styles.button8} onClick={()=>handleClickScroll("projects")}>
            <div className={styles.baackground10} >
              <button className={styles.getStarted12}>
                <div className={styles.getStarted2}>
                  <b className={styles.getStarted14}>View projects</b>
                  <img
                    className={styles.vectorIcon25}
                    alt=""
                    src={vector12}
                  />
                </div>
              </button>
            </div>
          </div>
          </div>
          <img
            className={styles.bannerImageIcon}
            alt=""
            src={banner}
          />
        </div>
      </div>
    </div>


  )
}

export default Profile