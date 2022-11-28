import { useCookies } from "react-cookie";
import { UserContext } from "../components/UserContext";
import * as React from 'react';
import { useRouter } from 'next/router';
export default function Disconnect(logout){
    
    const [cookies, setCookie, removeCookie] = useCookies();
    const router = useRouter()
    const [isLogged, setIsLogged] = React.useState(false)
    function  logout() {
        removeCookie(["user"])
        window.location.replace('/')
        setIsLogged(false)
      }
      logout
}