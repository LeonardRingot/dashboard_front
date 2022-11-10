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
           
        <div  > 
                <Link href="./administrateurs/createadmin"><a className={styles.buttonCreate}>Creer un admin</a></Link>
                
                <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th>Adresse mail</th>
                        <th>Numéro de téléphone</th>
                        <th>Role</th>
                        <th>Activé/Désactivé</th>
                    </tr>
                </thead>
                <tbody> 
                {data.map((element) => {
                     return (
                        <tr>
                            <td>
                                <h6>{element.email}</h6>
                            </td>
                            <td >  
                                <h6>{element.phone}</h6>
                            </td>
                            <td >
                                <h6>{element.Roles[0].role}</h6>
                            </td>
                            <td >
                                <h6>{element.isActif? "✅": "❌"}</h6>
                            </td>
                        </tr>)  
                })}
                    </tbody>
                </table>
                </div>
                   </Navbar>   
    )
    
}