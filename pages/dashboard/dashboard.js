import Navbar from '../../components/Navbar';
import Head from 'next/head'
import { useRouter } from 'next/router'
import {  useState, useEffect } from 'react'
import {useCookies} from 'react-cookie'
import styles from '../../styles/Home.module.css'

export default function Dashboard(logout){
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const setHeaders = (user) => {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${user}`);
    const options = {
      method: "GET",
      mode: "cors",
      headers,
    };
    return options;
  }
  
   const dashboardUser = async() => 
  {
    if(cookies.user)
    {
      setUser(cookies.user);
      let continu;
      let options = setHeaders(cookies.user[0]);
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DASHBOARD_ACCUEIL}`, options);
      if(res != null){
        if(res.status == 401)
        {
          let options = setHeaders(cookies.user[1])
        }
      }
    }
  }
  useEffect(() => {
    dashboardUser()
}, [user])



function logout() {
  removeCookie("user")
  window.location.replace('/')
}

    return(
      <>
     <Head>
     <title> Dashboard CSE</title>
     
     </Head>
     <Navbar   >
     <div className={styles.accueil}>
        
        <img style={{width:'1500px'}} src='/accueil.jpg'/>
        <h2>Centre Social Eclaté</h2>
        <h2>Adresse : 6 Rés René Descartes, 62280 Saint-Martin-Boulogne</h2>
        <h2>Téléphone : 03 21 99 56 90</h2>
         </div>
      </Navbar>
      
      </>
    )
}
