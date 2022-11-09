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

export default function dashboard(){

 const msg = useContext(UserContext)
    
function candidat () {
    <Link href="/dashboard/consultcandidat"></Link>
} ;
    return(
      <>
      <Navbar>
        
      </Navbar>
      {msg}
      {console.log(msg)}
      </>
      
      
    )
}
