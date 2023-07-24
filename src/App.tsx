import styles from "./styles/index1.module.css"
import "./styles/global.css";
import Nav  from './components/Nav';
import Profile from './components/Profile';
import Baner from './components/Baner';
import Projects from './components/Projects';
import IconBaner from './components/IconBaner';
import About from './components/About';
import WorkBaner from './components/WorkBaner';
import Footer from './components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className={styles.homepage} id='home'>
      <ToastContainer/>
    <div style={{ padding: "5% 6% 0% 6%" }}>
      <Nav/>
      <Profile />
    </div>
    <Baner />
    <div style={{ padding: "0% 6% 0% 6%" }} id='projects'>
      <Projects/>
    </div>
    <IconBaner />
    <div className={styles.baackgrounDiv2} style={{ padding: "0% 6% 0% 6%" }} id='about'>
      <About />
    </div>    
      <WorkBaner />
      <div className={styles.baackgrounDiv2} style={{ padding: "0% 6% 5% 6%" }} id='contact'>
      <Footer />
    </div>
  </div>
  );
}

export default App;
