import styles from '../../styles/Home.module.css'
import Navbar from '../../components/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import * as  ServiceAPI  from '../../services/ServiceAPI'
import Link from 'next/link';

export default function consultcandidat()
{
    const router = useRouter()
    let [data, setData] = useState(null)
    

    
    function deleteData(id){
        console.log(id);
        ServiceAPI.deleteCandidate(id).then(response => {
            console.log(response)
          if(response.status == 200)
          {
            if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
            }
          })
    }

    function modifData(id){
        console.log(id);
        ServiceAPI.requeteGetCandidatById(id).then(response =>{
            console.log(response)
            if(response.status == 200)
            {
                response.push('./candidate/updatecandidat/' +id)
                if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
            }
        })
    }

    let [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        ServiceAPI.requeteGetAllCandidats()
        .then(response => {
            console.log(response.data[0].User.Localisation)
          if(response.status == 200){
            if(response.data.length > 0)
            {
                setData(response.data)
                setLoading(false)
            }
          }
        })
        
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No candidates</p>
    return (
       <><Navbar></Navbar>
       <div className={styles.montab} > 
        <Link href="./candidate/createcandidat"><a className={styles.buttonCreate}>Crer un candidat</a></Link>
    <table className={styles.table}>
        <thead className={styles.thead} >
            <tr className={styles.tr}>
                <th className={styles.th}>lastname</th>
                <th className={styles.th}>firstname</th>
                <th className={styles.th}>birthday</th>
                <th className={styles.th}>userId</th>
                <th className={styles.th}>Code postal</th>
                <th className={styles.th}>Ville</th>
                <th className={styles.th}>EMail</th>
                <th className={styles.th}>IsActive?</th>
                <th className={styles.th}>Modifier Profile</th>
                <th className={styles.th}>Supprimer</th>
            </tr>
        </thead>
        <tbody> 
        {data.map((element) => {
      return (
            <tr>
                <td  className={styles.td}>
                    <h6 className={styles.nom}> {element.lastname}</h6>
                </td>
                <td className={styles.td}>  
                    <h6 className={styles.nom}>{element.firstname}</h6>
                </td>
                <td className={styles.td} >
                      <h6 className={styles.nom} >{new Date(element.birthday).toLocaleDateString()}</h6>
                </td>
                <td className={styles.td}>  
                    <h6 className={styles.nom}>{element.UserId}</h6>
                </td>
                <td className={styles.td}>
                     <h6 className={styles.nom}>  {element.User.Localisation.zipCode}</h6>
                </td>
                <td className={styles.td}>
                     <h6 className={styles.nom}> {element.User.Localisation.city}</h6>
                </td>
                <td className={styles.td}>
                    <h6 className={styles.nom}>  {element.User.email}</h6>
                </td>
                <td className={styles.td}>
                    <h6 className={styles.nom}>  {element.User.isActif? "✅": "❌"}</h6>
                </td>
                <td className={styles.td}>
                    <h6 className={styles.nom}> <a  onClick = {() =>modifData(element.id)}className={styles.buttonModif}href='./candidate/updatecandidat/'> Modifier Profile</a></h6>
                </td>
                <td className={styles.td}>
                <h6 className={styles.nom}>  <a onClick={() => deleteData(element.id)} className={styles.buttonSuppr} >Supprimer</a></h6>
                </td>
            </tr>)  
    })}
        </tbody>
    </table>
    </div>
       </>
    )
}