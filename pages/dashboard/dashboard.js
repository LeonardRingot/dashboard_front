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
  import {  useState, useContext, createContext } from 'react'
import Link from 'next/link';
import { UserContext } from '../connexion';

import {MyUser} from '../connexion'
console.log(MyUser)

export default function dashboard(){

 const msg = useContext(UserContext)
 
//  const msgData = useContext(MyUser)
function candidat () {
    <Link href="/dashboard/consultcandidat"></Link>
} ;

    return(
      <>
     
      <Navbar>
        
      </Navbar>
      {msg}
      {/* {msgData}
      {console.log(msg)}
      {console.log(msgData)} */}
      </>
    )
}
