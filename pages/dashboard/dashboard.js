import Navbar from '../../components/Navbar';
import Head from 'next/head'
import { useRouter } from 'next/router'
import {  useState, useEffect } from 'react'
import {useCookies} from 'react-cookie'

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
     <h1>TEST FROM ACCUEIL Dashboard 1</h1>
     <Navbar   >
     <h1>TEST FROM ACCUEIL Dashboard 2</h1>
      </Navbar>
      <h1>TEST FROM ACCUEIL Dashboard 3</h1>
      </>
    )
}
