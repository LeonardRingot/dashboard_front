import styles from '../../styles/Home.module.css'
import Headerdashboard from '../../components/Headerdashboard';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router'
import consultcandidat from './consultcandidat';
  import {  useState, useContext, createContext } from 'react'
import Link from 'next/link';

import {useCookies} from 'react-cookie'
import {ConnexionForm, response} from '../connexion'

export default function dashboard(){
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);
 

  function setHeaders(user) {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${user}`);
    const options = {
      method: "GET",
      mode: "cors",
      headers,
    };

    return options;
  }
  
  async function dashboardUser()
  {
    if(cookies.user)
    {
      let continu;
      let options = setHeaders(cookies.user[0]);
      const res = await fetch("http://localhost:3000/dashboard/dashboard", options);
      console.log(response)
      if(response.status == 401)
      {
        let options = setHeaders(cookies.user[1])
        
      }
    }
  }
 
 

function candidat () {
    <Link href="/dashboard/consultcandidat"></Link>
} ;

    return(
      <>
      {user != null ? (
        <Navbar >
        
      </Navbar>
      ): (
       
        window.location.replace("/")
      )}
     
      
      
      
      
      </>
    )
}
