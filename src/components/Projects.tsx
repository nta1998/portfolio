import styles from "../styles/index1.module.css"
import vector8 from "../public/vector8.svg"
import vector11 from "../public/vector11.svg"
import proj1 from "../public/proj1.png"
import proj2 from "../public/proj2.png"
import proj3 from "../public/proj3.png"



const Projects = () => {
  return (
    <div className={styles.project}>
      <div className={styles.content16}>
        <div className={styles.div6}>
          <div className={styles.webApplication}>
            <b className={styles.latestNews}>House Committee</b>
            <div className={styles.brandingUiuxDesign}>
              House Committee Management System
            </div>
            <div className={styles.content17}>
              <div className={styles.line15} />
              <div className={styles.loremIpsumIs4}>
                The House Committee Management System is a web application that provides a user-friendly management system for a house committee. It includes features such as a chat, votes for the house committee, surveys, and a shop for the sale of products in the building itself. The application is built using React-redux and Python Django and works on ASGI.
              </div>
            </div>
            <a href='https://www.committeeb.com'>
              <div className={styles.button3}>
                <b className={styles.newsletter}>View project</b>
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src={vector8}
                />
              </div>
            </a>
          </div>
          <div className={styles.background26} >
            <img className={styles.backgroundImg} src={proj1} alt="" />
          </div>
        </div>
        <div className={styles.div6}>
          <div className={styles.webApplication}>
            <b className={styles.latestNews}>AI facebook</b>
            <div className={styles.brandingUiuxDesign}>
              AI software for creating posts
            </div>
            <div className={styles.content17}>
              <div className={styles.line15} />
              <div className={styles.loremIpsumIs4}>
                Software that connects to chatGPT and creates Facebook posts on a selected topic and sends them to be posted on Facebook by entering a password and email. The software will create the requested post and publish it on its own. Built using selenium and tkinter              </div>
            </div>
            <a href='https://github.com/nta1998/Ai_facebook'>
              <div className={styles.button3}>
                <b className={styles.newsletter}>View project</b>
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src={vector8}
                />
              </div>
            </a>
          </div>
          <div className={styles.background26} >
            <img className={styles.backgroundImg} src={proj2} alt="" />
          </div>
        </div>
        <div className={styles.div6}>
          <div className={styles.webApplication}>
            <b className={styles.latestNews}>Library</b>
            <div className={styles.brandingUiuxDesign}>
              Library management website
            </div>
            <div className={styles.content17}>
              <div className={styles.line15} />
              <div className={styles.loremIpsumIs4}>
                A website for managing a library that includes adding new books, adding questions and adding new customers to the library was built in React and Python flask
              </div>
            </div>
            <a href='https://book-lms.netlify.app'>
              <div className={styles.button3}>
                <b className={styles.newsletter}>View project</b>
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src={vector8}
                />
              </div>
            </a>
          </div>
          <div className={styles.background26} >
            <img className={styles.backgroundImg} src={proj3} alt="" />
          </div>
        </div>

        <div className={styles.button4}>
          <a href='https://github.com/nta1998' style={{color: 'white'}}>
            <div className={styles.baackground9} />
            <div className={styles.getStarted5}>
              <div className={styles.getStarted2}>
                <b className={styles.newsletter}>All Projects</b>
                <img
                  className={styles.vectorIcon25}
                  alt=""
                  src={vector11}
                />
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Projects