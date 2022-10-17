
import styles from '../styles/Home.module.css'
import {  useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ServiceAPI from '../services/ServiceAPI'
export default function Headerdashboard() 
{
    
return (
    <div className={styles.headerdash}>
        
        <h1>Bienvenue sur votre dashboard </h1>
        
    </div>
);
}