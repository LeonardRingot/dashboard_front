
import styles from '../styles/Home.module.css'
import {  useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import * as ServiceAPI from '../services/ServiceAPI'

import { UserContext } from '../pages/connexion'
export default function Headerdashboard() 
{
    const msg = useContext(UserContext)
return (
    <div className={styles.headerdash}>
        <h1>Bienvenue sur votre dashboard {msg} </h1>
        
    </div>
);
}