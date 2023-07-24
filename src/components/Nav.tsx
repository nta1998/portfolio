import styles from '../styles/index1.module.css';
import icon from '../public/icons8-code-100.png'
import mail from "../public/vector13.svg"
const Nav = () => {
  const handleClickScroll = (e:string) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className={styles.topBar}>
      <div className={styles.background33}>
        <div className={styles.logo1}>
          <div className={styles.workment3}>
            <img className={styles.starIcon2} alt="" src={icon} />
            <b className={styles.agencyworkmentcom}>Liloz Natanel</b>  
          </div>
        </div>
        <div className={styles.menu1}>
          <p className={styles.work2} onClick={()=>handleClickScroll("projects")}>
          projects
          </p>

          <p className={styles.work2} onClick={()=>handleClickScroll("about")}>
            ABOUT
          </p>

          <p className={styles.work2} onClick={()=>handleClickScroll("contact")}>
           CONTACT
          </p>
        </div>

        <a href="mailto:nta1998@gmail.com" className={styles.vectorIcon38}>
          <img alt="" src={mail} />
        </a>
      </div>
    </div>
  );
};
export default Nav