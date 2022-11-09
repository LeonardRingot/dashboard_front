import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import * as  ServiceAPI  from '../../services/ServiceAPI'
import Link from 'next/link';

export default function consultadmin()
{
    const router = useRouter()
    const {id} = router.query
    let [data, setData] = useState(null)
    let [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        ServiceAPI.requeteGetAllAdmin()
        .then(response => {
            console.log(response)
          if(response.status == 200){
            if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
          }
        }
        )
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No candidates</p>

    return (
        <Navbar>
           
        <div className={styles.montab} > 
                <Link href="./administrateurs/createadmin"><a className={styles.buttonCreate}>Creer un admin</a></Link>
                
            <table className={styles.table}>
                <thead className={styles.thead} >
                    <tr className={styles.tr}>
                        <th className={styles.th}>email</th>
                        <th className={styles.th}>phone</th>
                        <th className={styles.th}>Role</th>
                        <th className={styles.th}>IsActive</th>
                    </tr>
                </thead>
                <tbody> 
                {data.map((element) => {
                     return (
                        <tr>
                            <td  className={styles.td}>
                                <h6 className={styles.nom}> {element.email}</h6>
                            </td>
                            <td className={styles.td}>  
                                <h6 className={styles.nom}>{element.phone}</h6>
                            </td>
                            <td className={styles.td}>
                                <h6 className={styles.nom}>{element.Roles[0].role}</h6>
                            </td>
                            <td className={styles.td}>
                                <h6 className={styles.nom}>{element.isActif? "✅": "❌"}</h6>
                            </td>
                           
                           
                        </tr>)  
                })}
                    </tbody>
                </table>
                </div>
                   </Navbar>   
    )
    console.log(element.Roles.role)
}