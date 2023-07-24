import React, { useState } from 'react'
import styles from "../styles/index1.module.css"
import icons8 from "../public/icons8-code-100.png"
import vector1 from "../public/vector1.svg"
import roket from "../public/roket.svg"
import vector4 from "../public/vector4.svg"
import vector3 from "../public/vector3.svg"
import linkedin from "../public/icons8-linkedin-250.png"
import github from "../public/icons8-github-256.png"
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Footer = () => {
  const [email, setemail] = useState("")
  const handleClickScroll = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  var templateParams = {
    email: email,
    notes: 'Check this out!'
};
 const send=()=> {
emailjs.send('service_ayby5pe', 'template_3litujn', templateParams,"fg2IrUu4zzAcNEzek")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text,templateParams);
       toast.success('Mail send 📨', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }, function(error) {
       console.log('FAILED...', error,templateParams);
       toast.error('Something went wrong, try again later ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    });
  }
  return (
    <div className={styles.footer}>
      <div className={styles.workmentMenu1}>
        <div className={styles.workment}>
          <div className={styles.content1}>
            <div className={styles.content2}>
              <div className={styles.workment1}>
                <div className={styles.logo}>
                  <img
                    className={styles.icon}
                    alt=""
                    src={icons8}
                  />
                  <b>Liloz Natanel</b>
                </div>
                <div className={styles.itIsA6}>
                  There is nothing that cannot be learned
                </div>
              </div>
              <div className={styles.contact}>
                <div className={styles.mail}>
                  <b className={styles.agencyworkmentcom}>
                    nta1998@gmail.com
                  </b>
                  <b className={styles.agencyworkmentcom}>
                    052-6894022
                  </b>
                </div>
                <div className={styles.follow1}>
                  <a href='https://www.facebook.com/Natanel.liloz/'>
                    <div className={styles.twitter}>
                      <div className={styles.twitterChild} />
                      <div className={styles.twitterItem} />
                      <img
                        className={styles.vectorIcon23}
                        alt=""
                        src={vector1}
                      />
                    </div>
                  </a>
                  <a href='https://www.linkedin.com/in/netanelliloz/'>
                    <div className={styles.twitter}>
                      <div className={styles.twitterChild} />
                      <div className={styles.twitterItem} />
                      <img
                        className={styles.vectorIcon24}
                        alt=""
                        src={linkedin}
                      />
                    </div>
                  </a>
                  <a href='https://github.com/nta1998'>
                    <div className={styles.twitter}>
                      <div className={styles.twitterChild} />
                      <div className={styles.twitterItem} />
                      <img
                        className={styles.vectorIcon24g}
                        alt=""
                        src={github}
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.newslatter}>
              <b className={styles.newsletter}>Contact Me</b>
              <div className={styles.newsletter1}>
                <div className={styles.content3}>
                  <div className={styles.email}>
                    <input className={styles.yourMailHere1} placeholder="your mail here" onChange={(e)=>setemail(e.target.value)} type={"email"}/>
                  </div>
                  <div className={styles.button} onClick={send} >
                    <div className={styles.frame}>
                      <div className={styles.baackground6} />
                    </div>
                    <div className={styles.getStarted1}>
                      <div className={styles.getStarted2}>
                        <b className={styles.newsletter}>Send Message</b>
                        <img
                          className={styles.vectorIcon25}
                          alt=""
                          src={vector3}
                        />
                      </div>
                    </div>
                    <img className={styles.roketIcon} alt="" src={roket} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.div}>
            <b className={styles.agencyworkmentcom}>
            Open your door to dreams
                        </b>
          </div>
          <div className={styles.div1}>
            <b className={styles.agencyworkmentcom}>Coffee is life</b>
          </div>
        </div>
        <div className={styles.copyrights}>
          <div className={styles.copyright}>
            <div className={styles.copyrightWorkment1}>
              Copyright © liloz | Designed by Figma
            </div>
            <div className={styles.topAerrrow} onClick={() => handleClickScroll("home")}>
              <img className={styles.vectorIcon26} alt="" src={vector4} />
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Footer