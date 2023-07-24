import React from 'react'
import styles from "../styles/index1.module.css"
import python from "../public/python.png"
import django from "../public/icons8-django-150.png"
import flask from "../public/icons8-flask-150.png"
import js from "../public/icons8-js-150.png"
import typescript from "../public/icons8-typescript-150.png"
import react from "../public/icons8-react-native-150.png"
import redux from "../public/icons8-redux-150 (1).png"
import angular from "../public/icons8-angular-150.png"
import amazon from "../public/icons8-amazon-web-services-128.png"
import firebase from "../public/icons8-firebase-a-google's-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-96.png"
import php from "../public/icons8-php-150.png"
import docker from "../public/docker.png"
import git from "../public/icons8-git-150.png"
import sql from "../public//sql-server.png"

const IconBaner = () => {
  return (
    <div className={styles.clientLogo}>
      <div className={styles.logo2}>
          <img className={styles.logoItem} alt="" src={python} />
          <img className={styles.logoItem} alt="" src={django} />
          <img className={styles.logoItem} alt="" src={flask} />
          <img className={styles.logoItem} alt="" src={js} />
          <img className={styles.logoItem} alt="" src={typescript}/>
          <img className={styles.logoItem} alt="" src={react} />
          <img className={styles.logoItem} alt="" src={redux} />
          <img className={styles.logoItem} alt="" src={angular} />
          <img className={styles.logoItem} alt="" src={amazon} />
          <img className={styles.logoItem} alt="" src={firebase} />
          <img className={styles.logoItem} alt="" src={php} />
          <img className={styles.logoItem} alt="" src={docker} />
          <img className={styles.logoItem} alt="" src={git} />
          <img className={styles.logoItem} alt="" src={sql} />
      </div>
    </div>)
}

export default IconBaner