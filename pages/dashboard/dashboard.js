import styles from '../../styles/Home.module.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Headerdashboard from '../../components/Headerdashboard';
import Navbar from '../../components/Navbar';
import consultcandidat from './consultcandidat';
import {
    MdOutlineHome,
    MdOutlineNotifications,
    MdOutlineAccountCircle,
    MdOutlineAccountBox,
    MdOutlineModeEditOutline,
    MdOutlineLogout,
  } from "react-icons/md";
import Link from 'next/link';


export default function dashboard(){

    /*
        CODE
    */
function candidat () {
    <Link href="/dashboard/consultcandidat"></Link>
} ;
    return(
        <><div>
            <Headerdashboard></Headerdashboard>
        </div>
        <Navbar></Navbar>
            
            
            </>
        
            
          
    )
}

{/* <div className={styles.navbar}>
<div className="spacebetween">
        <MdOutlineHome />
        <Link href="/"><a >Accueil</a></Link>
</div>
 <div className="spacebetween">
        <MdOutlineAccountCircle  />
        <Link href="./consultcandidat"><a>Consultation candidats</a></Link>
</div>
<div className="spacebetween">
        <MdOutlineAccountBox />
       <Link href="./consultemployeur"><a>Consultation profil employeurs</a></Link>
</div>
<div className="spacebetween">
        <MdOutlineModeEditOutline  />
        <Link href="./consultadminprofil"><a>Consultation profil admin</a></Link>
</div>
<div className="spacebetween">
        <MdOutlineNotifications  />
        <Link href="./notiications"><a>Notifications</a></Link>
</div>
<div className="spacebetween">
        <MdOutlineLogout  />
        <Link href="./deconnect"><a>Se deconnecter</a></Link>
</div>
</div> */}