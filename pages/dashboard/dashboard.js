import styles from '../../styles/Home.module.css'
import Headerdashboard from '../../components/Headerdashboard';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router'
import consultcandidat from './consultcandidat';
  import {  useState, useEffect } from 'react'
import Link from 'next/link';
import {useCookies} from 'react-cookie'
import {ConnexionForm, response} from '../connexion'



export default function dashboard(){
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
      const res = await fetch("http://localhost:3000/dashboard/dashboard", options);
      console.log(cookies.user)
      if(response != null){
        if(response.status == 401)
        {
          let options = setHeaders(cookies.user[1])
          console.log("jai pas recu cookie")
        }
      }
    }
  }
  useEffect(() => {
    dashboardUser()
}, [user])

function candidat () {
    <Link href="/dashboard/consultcandidat"></Link>
} ;

    return(
      <>
     <Navbar >
      </Navbar>
      </>
    )
}
