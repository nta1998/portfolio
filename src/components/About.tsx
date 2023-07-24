import React from 'react'
import styles from "../styles/index1.module.css"
import Matrix from "../public/Matrix Wallpapers HD - Wallpaper Cave.png"
import vector6 from "../public/vector6.svg"

const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('NatanelLiloz.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Natanel Liloz.pdf';
            alink.click();
        })
    })
}
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutUs1}>
        <div className={styles.content11}>
          <div className={styles.image7}>
            <img
              className={styles.backgroundIcon3}
              alt=""
              src={Matrix}
            />
          </div>
          <div className={styles.heading1}>
            <div>
              <b className={styles.uniqueSolutionsForContainer}>
                <p className={styles.completelyCustom}>About</p>
                <p className={styles.completelyCustom}>Me</p>
              </b>
              <div className={styles.itIsAContainer}>
                <p className={styles.completelyCustom}>
                  Hey there! I'm Natanel Liloz, the coding magician on a mission! 🧙‍♂️
                </p>
                <p className={styles.completelyCustom}>
                  My journey into the enchanted world of programming started with an unexpected twist - the pandemic shook things up and pushed me into coding! 🦠🚀
                </p>
                <p className={styles.completelyCustom}>
                  Driven by curiosity, I went on a wild adventure, exploring resources and tutorials to build a strong foundation in programming.🏄‍♂️ 
                  <p className={styles.completelyCustom}>
                    And guess what? I aced the John Bryce course with honors! 🎓🏆
                  </p>
                </p>
                <p className={styles.completelyCustom}>
                  There's nothing I love more than flexing my bug-busting muscles and cracking those coding puzzles like a pro! 🔍🐞
                  <p className={styles.completelyCustom}>
                    But you know what really sparks joy in my coding heart? The dream of using my skills to create products that make the world a better place! 💻🌍
                  </p>
                </p>
                <p className={styles.completelyCustom}>
                  Now, I'm on a quest to find the perfect coding adventure - a challenging role where I can save the day, one line of code at a time! 💪🦸‍♂️ So, if you're in need of a passionate problem-solver and tech-savvy hero, look no further! 🦹‍♂️🌟
                </p>
                <p className={styles.completelyCustom}>
                  Join me in this magical coding journey, and together, we'll create a brighter, fun-filled future! 🚀🎉
                </p>
              </div>
            </div>
            <p onClick={onButtonClick} style={{color:"white", textDecoration: "none",width:"100%", maxWidth: "330px",cursor:"pointer"}}>
            <div className={styles.button2}>
              <div className={styles.baackground8} />
              <div className={styles.fullresume}>
                <div className={styles.getStarted2}>
                  <b className={styles.newsletter}>Full resume</b>
                  <img
                    className={styles.vectorIcon25}
                    alt=""
                    src={vector6}
                  />
                </div>
              </div>
            </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About