
import styles from '../styles/Home.module.css'
import {  useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import * as ServiceAPI from '../services/ServiceAPI'

import { UserContext } from '../components/UserContext'
export default function Headerdashboard() 
{
    const msg = UserContext._currentValue.email
    console.log(msg)
return (
    <div className={styles.headerdash}>
        <h1>Bienvenue sur votre dashboard {msg} </h1>
        
    </div>
);
}