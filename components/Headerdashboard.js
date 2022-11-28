
import styles from '../styles/Home.module.css'
import { useCookies } from "react-cookie";
import { useState, useEffect } from 'react'

export default function Headerdashboard() 
{
    const [cookies] = useCookies();
    const [user, setUser] = useState("");
    useEffect(() => {
        if (cookies != undefined){
            if (cookies["user"] != undefined){
                if(cookies["user"][2] != undefined){
                    setUser(cookies["user"][2]);
                }
            }
        }
    }, [user]);
    return (
    <div className={styles.headerdash}>
        <h1>Bienvenue {user} sur votre dashboard</h1>
    </div>
);
}